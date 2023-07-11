import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import * as Styles from "./SaveDeckButton.styles";

const SaveDeckButton = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  const handleClick = () => {
    if (deck._id) {
    } else {
    }
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
