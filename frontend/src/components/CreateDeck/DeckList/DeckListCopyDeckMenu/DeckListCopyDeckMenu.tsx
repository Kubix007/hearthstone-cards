import * as Styles from "./DeckListCopyDeckMenu.styles";
import CopyLinkButton from "./CopyLinkButton";
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
      <CopyLinkButton />
      <CopyDeckCodeButton />
    </Styles.CopyDeckMenuContainer>
  );
};

export default DeckListCopyDeckMenu;
