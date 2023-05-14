import { useSelector } from "react-redux";
import * as Styles from "./DeckDetailsHeroPower.styles";
import { RootState } from "../../../../../app/store";

const DeckDetailsHeroPower = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  return (
    <Styles.Container>
      <Styles.HeroPowerImage
        src={deck.heroPower?.image}
        alt={deck.heroPower?.name}
      />
    </Styles.Container>
  );
};

export default DeckDetailsHeroPower;
