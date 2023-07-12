import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import {
  updateDeck,
  createDeck,
} from "../../../../../features/decks/deckSlice";
import * as Styles from "./SaveDeckButton.styles";
import * as Types from "./SaveDeckButton.types";

const SaveDeckButton = ({ setOpen }: Types.IProps) => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Styles.CopyLinkButtonContainer onClick={handleClick}>
      <Styles.PrimaryText>Zapisz talię</Styles.PrimaryText>
      <Styles.SecondaryText>
        Zachowaj swoją talię na później
      </Styles.SecondaryText>
    </Styles.CopyLinkButtonContainer>
  );
};

export default SaveDeckButton;
