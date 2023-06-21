import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import DeckCard from "../DeckCard/DeckCard";
import * as Styles from "./DeckCardList.styles";

const DeckCardList = () => {
  const { decks } = useSelector((state: RootState) => state.deck);
  return (
    <Styles.GridContainer container direction="column" justifyContent="center">
      {decks.map((deck) => (
        <Styles.GridItem key={deck.deckCode + deck.deckName} item>
          <DeckCard decks={deck} />
        </Styles.GridItem>
      ))}
    </Styles.GridContainer>
  );
};

export default DeckCardList;
