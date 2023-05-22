import { useSelector } from "react-redux";
import CardRow from "../CardRow/CardRow";
import { RootState } from "../../../app/store";
import * as Styles from "./CardRowList.styles";

const CardRowList = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  return (
    <Styles.Container>
      {Array.from(new Set(deck.cards))
        .sort((a, b) => a.manaCost - b.manaCost)
        .map((item) => (
          <Styles.GridItem key={item.id}>
            <CardRow card={item} />
          </Styles.GridItem>
        ))}
    </Styles.Container>
  );
};

export default CardRowList;
