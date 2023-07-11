import * as Styles from "./MyDecks.styles";
import TopBar from "../../components/MyDecks/TopBar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import { useEffect } from "react";
import { getDecks } from "../../features/decks/deckSlice";
import DeckCardList from "../../components/MyDecks/DeckCardList";
import NoResultInfo from "../../components/FilterBar/NoResultInfo";

const MyDecks = () => {
  const { decks } = useSelector((state: RootState) => state.deck);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <Styles.Container>
      <TopBar />
      {decks.length < 1 ? (
        <NoResultInfo
          headerInfo="Nie znaleziono żadnych talii"
          detailsInfo="Stwórz swoje własne talie, aby móc je przeglądać"
        />
      ) : (
        <DeckCardList />
      )}
    </Styles.Container>
  );
};

export default MyDecks;
