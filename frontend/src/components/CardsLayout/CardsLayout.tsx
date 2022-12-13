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
  reset,
} from "../../features/selectedCard/selectedCardSlice";

const CardsLayout = ({ card }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.cards);
  const { selectedCard } = useSelector(
    (state: RootState) => state.selectedCard
  );

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(setSelectedCard(card));
    dispatch(setSelectedIndex(cards.cards.indexOf(card)));
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
            onClick={handleClickOpen}
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
