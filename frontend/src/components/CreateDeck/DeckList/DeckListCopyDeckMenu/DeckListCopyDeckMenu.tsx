import * as Styles from "./DeckListCopyDeckMenu.styles";
import SaveDeckButton from "./SaveDeckButton";
import CopyDeckCodeButton from "./CopyDeckCodeButton";
import DeckListSaveDeckDialog from "../DeckListSaveDeckDialog";
import { useState } from "react";

const DeckListCopyDeckMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styles.CopyDeckMenuContainer>
        <Styles.CopyDeckMenuLeftTopBorder />
        <Styles.CopyDeckMenuTopBorder />
        <Styles.CopyDeckMenuRightTopBorder />
        <Styles.CopyDeckMenuLeftBorder />
        <Styles.CopyDeckMenuLeftBottomBorder />
        <Styles.CopyDeckMenuBottomBorder />
        <Styles.CopyDeckMenuRightBorder />
        <Styles.CopyDeckMenuRightBottomBorder />
        <SaveDeckButton setOpen={setOpen} />
        <CopyDeckCodeButton />
      </Styles.CopyDeckMenuContainer>
      <DeckListSaveDeckDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default DeckListCopyDeckMenu;
