import { useDispatch, useSelector } from "react-redux";
import * as Styles from "./CopyDeckCodeButton.styles";
import { AppDispatch, RootState } from "../../../../../app/store";
import { getDeckCode } from "../../../../../features/createDeck/createDeckSlice";
import { Tooltip } from "@mui/material";
import { useState } from "react";

const CopyDeckCodeButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { deck } = useSelector((state: RootState) => state.createDeck);

  const mapDeckToRequest = () => {
    const cardsIds = deck.cards.map((item) => item.id);
    return cardsIds.join(",");
  };

  const handleClick = () => {
    dispatch(
      getDeckCode({ hero: deck.hero?.cardId!, ids: mapDeckToRequest() })
    ).then(() => {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    });
  };

  return (
    <Tooltip
      arrow
      title={
        <Styles.CopyDeckTooltipTitle>
          Kod talii został skopiowany do schowka
        </Styles.CopyDeckTooltipTitle>
      }
      disableFocusListener
      disableHoverListener
      disableTouchListener
      placement="top"
      open={open}
      PopperProps={{
        sx: {
          "& .MuiTooltip-tooltip": {
            border: "2px solid black",
            background: "rgb(242, 235, 227)",
            borderRadius: "7px",
          },
          "& .MuiTooltip-arrow": {
            color: "rgb(242, 235, 227)",
          },
        },
      }}
    >
      <Styles.CopyDeckCodeButtonContainer
        disabled={deck.cardCount < 30 ? true : false}
        onClick={handleClick}
      >
        <Styles.PrimaryText $disabled={deck.cardCount < 30 ? true : false}>
          Skopiuj kod talii
        </Styles.PrimaryText>
        <Styles.SecondaryText $disabled={deck.cardCount < 30 ? true : false}>
          Uzupełnij swoją talię
        </Styles.SecondaryText>
        <Styles.DeckCardsCount $disabled={deck.cardCount < 30 ? true : false}>
          {deck.cardCount}/30
        </Styles.DeckCardsCount>
      </Styles.CopyDeckCodeButtonContainer>
    </Tooltip>
  );
};

export default CopyDeckCodeButton;
