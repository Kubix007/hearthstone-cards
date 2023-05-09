import * as Styles from "./CardsLayout.style";
import { useState } from "react";
import { Grow } from "@mui/material";
import * as Types from "./CardsLayout.types";
import CardsInfoPopover from "./CardsInfoPopover";
import React from "react";
import CardsInfoDialog from "./CardsInfoDialog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import {
  setSelectedCard,
  setSelectedIndex,
} from "../../features/selectedCard/selectedCardSlice";
import { addCardToDeck } from "../../features/createDeck/createDeckSlice";

const CardsLayout = ({ card, type }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.cards);
  const { selectedCard } = useSelector(
    (state: RootState) => state.selectedCard
  );

  const isBrowseType = type === "BROWSE" ? true : false;

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpenForBrowseCards = () => {
    setOpen(true);
    dispatch(setSelectedCard(card));
    dispatch(setSelectedIndex(cards.cards.indexOf(card)));
  };

  const handleClickOpenForCreateDeck = () => {
    dispatch(addCardToDeck(card));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Styles.Container>
      <Grow timeout={500} in={isLoaded}>
        <Styles.Card>
          <Styles.Cover
            src={card.image}
            alt={card.name}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            onLoad={() => setIsLoaded(true)}
            onClick={
              isBrowseType
                ? handleClickOpenForBrowseCards
                : handleClickOpenForCreateDeck
            }
          />
        </Styles.Card>
      </Grow>
      {card.keywordIds ? (
        <CardsInfoPopover
          keywordsIds={card.keywordIds}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handlePopoverClose={handlePopoverClose}
          handlePopoverOpen={handlePopoverOpen}
        />
      ) : null}
      <CardsInfoDialog cards={selectedCard} open={open} onClose={handleClose} />
    </Styles.Container>
  );
};

export default CardsLayout;
