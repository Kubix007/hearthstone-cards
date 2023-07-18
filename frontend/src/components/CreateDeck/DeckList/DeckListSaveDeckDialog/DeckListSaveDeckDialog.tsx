import { Button, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import SaveDeckDialogInput from "./SaveDeckDialogInput";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "../../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { updateDeck, createDeck } from "../../../../features/decks/deckSlice";
import * as Types from "./DeckListSaveDeckDialog.types";
import * as Styles from "./DeckListSaveDeckDialog.styles";

const DeckListSaveDeckDialog = ({ open, setOpen }: Types.IProps) => {
  const [inputValue, setInputValue] = useState("");
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const dispatch: AppDispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue === "") {
      toast.error("Wprowadź nazwę talii");
    } else if (inputValue.length < 3 || inputValue.length > 16) {
      toast.error("Nazwa talii może składać się od 3 do 16 znaków");
    } else {
      if (deck._id) {
        dispatch(
          updateDeck({
            _id: deck._id,
            deckName: inputValue,
            cards: deck.cards,
            deckCode: deck.deckCode,
            cardCount: deck.cardCount,
            class: deck.class!,
            format: deck.format,
            hero: deck.hero!,
            heroPower: deck.heroPower!,
            version: deck.version!,
          })
        )
          .then(() => {
            toast.info("Pomyślnie zaktualizowano talię");
          })
          .catch(() => {
            toast.error("Nie udało się zaktualizować talii");
          });
        setOpen(false);
      } else {
        dispatch(
          createDeck({
            deckName: inputValue,
            cards: deck.cards,
            deckCode: deck.deckCode,
            cardCount: deck.cardCount,
            class: deck.class!,
            format: deck.format,
            hero: deck.hero!,
            heroPower: deck.heroPower!,
            version: deck.version!,
          })
        )
          .then(() => {
            toast.info("Pomyślnie dodano talię");
          })
          .catch(() => {
            toast.error("Nie udało się dodać talii");
          });
        setOpen(false);
      }
    }
  };

  return (
    <>
      <Styles.DialogContainer open={open} onClose={handleClose}>
        <Styles.Title>Wprowadź nazwę talii</Styles.Title>
        <DialogContent>
          <SaveDeckDialogInput
            handleSubmit={handleSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            <Styles.ButtonIcon>X</Styles.ButtonIcon>
          </Button>
          <Button onClick={handleSubmit} autoFocus>
            <Styles.ButtonIcon>✔</Styles.ButtonIcon>
          </Button>
        </DialogActions>
      </Styles.DialogContainer>
    </>
  );
};

export default DeckListSaveDeckDialog;
