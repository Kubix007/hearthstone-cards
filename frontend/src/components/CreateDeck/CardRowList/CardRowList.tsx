import { useSelector } from "react-redux";
import CardRow from "../CardRow/CardRow";
import { RootState } from "../../../app/store";
import * as Styles from "./CardRowList.styles";

const CardRowList = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const filteredCards = deck.cards.filter((object, index) => {
    const stringObject = JSON.stringify(object);
    return (
      index ===
      deck.cards.findIndex((obj) => JSON.stringify(obj) === stringObject)
    );
  });

  return (
    <Styles.Container>
      {filteredCards
        .sort((a, b) => a.manaCost - b.manaCost)
        .sort((a, b) => {
          if (a.manaCost === b.manaCost) {
            return a.name.localeCompare(b.name);
          }
          return 0;
        })
        .map((item) => (
          <Styles.GridItem key={item.id}>
            <CardRow card={item} />
          </Styles.GridItem>
        ))}
    </Styles.Container>
  );
};

export default CardRowList;
