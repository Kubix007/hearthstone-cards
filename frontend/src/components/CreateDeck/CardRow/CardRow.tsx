import * as Types from "./CardRow.types";
import * as Styles from "./CardRow.styles";

const CardRow = ({ card }: Types.Props) => {
  return (
    <Styles.CardRowContainer>
      <Styles.CardRowCost>{card.manaCost}</Styles.CardRowCost>
      <Styles.CardRowName>
        <Styles.CardName>{card.name}</Styles.CardName>
      </Styles.CardRowName>
      <Styles.CardRowImage image={card.cropImage} />
    </Styles.CardRowContainer>
  );
};

export default CardRow;
