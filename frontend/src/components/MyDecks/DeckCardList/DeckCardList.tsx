import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import DeckCard from "../DeckCard/DeckCard";
import * as Styles from "./DeckCardList.styles";

const DeckCardList = () => {
  const { decks } = useSelector((state: RootState) => state.deck);
  return (
    <Styles.GridContainer container justifyContent="center" spacing={2}>
      {decks.map((deck) => (
        <Styles.GridItem xl={4} key={deck.deckCode + deck.deckName} item>
          <DeckCard decks={deck} />
        </Styles.GridItem>
      ))}
    </Styles.GridContainer>
  );
};

export default DeckCardList;
