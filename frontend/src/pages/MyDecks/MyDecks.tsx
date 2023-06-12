import * as Styles from "./MyDecks.styles";
import TopBar from "../../components/MyDecks/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { getDecks } from "../../features/decks/deckSlice";

const MyDecks = () => {
  const { decks } = useSelector((state: RootState) => state.deck);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <Styles.Container>
      <TopBar />
      {decks.map((item) => (
        <span>{item.hero.name}</span>
      ))}
    </Styles.Container>
  );
};

export default MyDecks;
