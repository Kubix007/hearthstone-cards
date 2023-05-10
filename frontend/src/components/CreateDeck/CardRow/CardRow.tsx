import * as Types from "./CardRow.types";
import * as Styles from "./CardRow.styles";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { countOccurrences } from "../../../functions/Functions";

const CardRow = ({ card }: Types.Props) => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  const cardOccurences = countOccurrences(deck.cards, card);

  return (
    <Styles.CardRowContainer>
      <Styles.CardRowCost>
        <Styles.CardCost>{card.manaCost}</Styles.CardCost>
      </Styles.CardRowCost>
      <Styles.CardRowName>
        <Styles.CardName>{card.name}</Styles.CardName>
      </Styles.CardRowName>
      <Styles.CardRowImage image={card.cropImage} />
      <Styles.CardRowCount>
        <Styles.CardCount>
          {cardOccurences === 1 ? null : cardOccurences}
        </Styles.CardCount>
      </Styles.CardRowCount>
    </Styles.CardRowContainer>
  );
};

export default CardRow;
