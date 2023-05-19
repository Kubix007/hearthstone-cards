import { useSelector } from "react-redux";
import * as Styles from "./CopyDeckCodeButton.styles";
import { RootState } from "../../../../../app/store";

const CopyDeckCodeButton = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  return (
    <Styles.CopyDeckCodeButtonContainer
      disabled={deck.cardCount < 30 ? true : false}
    >
      <Styles.PrimaryText $disabled={deck.cardCount < 30 ? true : false}>
        Skopiuj kod talii
      </Styles.PrimaryText>
      <Styles.SecondaryText $disabled={deck.cardCount < 30 ? true : false}>
        Uzupełnij swoją talię
      </Styles.SecondaryText>
      <Styles.DeckCardsCount $disabled={deck.cardCount < 30 ? true : false}>
        {deck.cardCount}/30
      </Styles.DeckCardsCount>
    </Styles.CopyDeckCodeButtonContainer>
  );
};

export default CopyDeckCodeButton;
