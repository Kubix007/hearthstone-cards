import * as Styles from "./MyDecks.styles";
import TopBar from "../../components/MyDecks/TopBar";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useEffect } from "react";
import { getDecks } from "../../features/decks/deckSlice";
import DeckCardList from "../../components/MyDecks/DeckCardList";

const MyDecks = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <Styles.Container>
      <TopBar />
      <DeckCardList />
    </Styles.Container>
  );
};

export default MyDecks;
