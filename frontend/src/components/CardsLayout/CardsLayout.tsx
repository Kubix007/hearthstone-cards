import * as Styles from "./CardsLayout.style";
import { useRef, useState } from "react";
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
import {
  addCardToDeck,
  updateManaCosts,
} from "../../features/createDeck/createDeckSlice";
import {
  countOccurrences,
  maxCardReached,
  getManaCosts,
} from "../../functions/Functions";

const CardsLayout = ({ card, type }: Types.Props) => {
  const countElement = useRef<HTMLDivElement>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { cards } = useSelector((state: RootState) => state.cards);
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const { selectedCard } = useSelector(
    (state: RootState) => state.selectedCard
  );

  const isBrowseType = type === "BROWSE" ? true : false;
  const cardOccurences = countOccurrences(deck.cards, card);
  const maxNumberOfCard = card.rarityId === 5 ? 1 : 2;

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
    const currentClass = countElement.current?.getAttribute("class") as string;
    if (card.rarityId === 5) {
      if (cardOccurences < 1) {
        dispatch(addCardToDeck(card));
        dispatch(updateManaCosts(getManaCosts([...deck.cards, card])));
      } else {
        maxCardReached(countElement, currentClass);
      }
    } else if (cardOccurences < 2) {
      dispatch(addCardToDeck(card));
      dispatch(updateManaCosts(getManaCosts([...deck.cards, card])));
    } else {
      maxCardReached(countElement, currentClass);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Styles.Container>
      <Grow timeout={500} in={isLoaded}>
        <Styles.Card value={cardOccurences} max={maxNumberOfCard}>
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
      {cardOccurences === 0 ? null : isBrowseType ? null : (
        <Styles.CardCount
          ref={countElement}
          value={cardOccurences}
          max={maxNumberOfCard}
        >
          <Styles.CardCountText value={cardOccurences} max={maxNumberOfCard}>
            {cardOccurences}/{maxNumberOfCard}
          </Styles.CardCountText>
        </Styles.CardCount>
      )}
      {card.keywordIds ? (
        <CardsInfoPopover
          keywordsIds={card.keywordIds}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handlePopoverClose={handlePopoverClose}
          handlePopoverOpen={handlePopoverOpen}
        />
      ) : null}
      {isBrowseType ? (
        <CardsInfoDialog
          isBrowseType={isBrowseType}
          cards={selectedCard}
          open={open}
          onClose={handleClose}
        />
      ) : null}
    </Styles.Container>
  );
};

export default CardsLayout;
