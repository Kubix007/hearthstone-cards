import * as Styles from "./DeckListCopyDeckMenu.styles";
import SaveDeckButton from "./SaveDeckButton";
import CopyDeckCodeButton from "./CopyDeckCodeButton";

const DeckListCopyDeckMenu = () => {
  return (
    <Styles.CopyDeckMenuContainer>
      <Styles.CopyDeckMenuLeftTopBorder />
      <Styles.CopyDeckMenuTopBorder />
      <Styles.CopyDeckMenuRightTopBorder />
      <Styles.CopyDeckMenuLeftBorder />
      <Styles.CopyDeckMenuLeftBottomBorder />
      <Styles.CopyDeckMenuBottomBorder />
      <Styles.CopyDeckMenuRightBorder />
      <Styles.CopyDeckMenuRightBottomBorder />
      <SaveDeckButton />
      <CopyDeckCodeButton />
    </Styles.CopyDeckMenuContainer>
  );
};

export default DeckListCopyDeckMenu;
