import { Button, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import SaveDeckDialogInput from "./SaveDeckDialogInput";
import * as Types from "./DeckListSaveDeckDialog.types";
import * as Styles from "./DeckListSaveDeckDialog.styles";

const DeckListSaveDeckDialog = ({ open, setOpen }: Types.IProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Styles.DialogContainer open={open} onClose={handleClose}>
        <Styles.Title>Wprowadź nazwę talii</Styles.Title>
        <DialogContent>
          <SaveDeckDialogInput
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Styles.ButtonIcon>X</Styles.ButtonIcon>
          </Button>
          <Button onClick={handleClose} autoFocus>
            <Styles.ButtonIcon>✔</Styles.ButtonIcon>
          </Button>
        </DialogActions>
      </Styles.DialogContainer>
    </>
  );
};

export default DeckListSaveDeckDialog;
