import DeckCardBackground from "../DeckCardBackground";
import * as Types from "./DeckCard.types";
import * as Styles from "./DeckCard.styles";
import { useState } from "react";

const DeckCard = ({ decks }: Types.IProps) => {
  const [isClickedDropdownMenu, setIsClickedDropdownMenu] = useState(false);

  return (
    <Styles.Container
      onClick={() => setIsClickedDropdownMenu((prevState) => !prevState)}
    >
      <DeckCardBackground deck={decks} $isclicked={isClickedDropdownMenu} />
    </Styles.Container>
  );
};

export default DeckCard;
