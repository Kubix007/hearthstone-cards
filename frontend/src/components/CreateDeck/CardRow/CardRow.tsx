import * as Types from "./CardRow.types";
import * as Styles from "./CardRow.styles";
import * as SharedTypes from "../../../shared/types";
import { AppDispatch, RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { countOccurrences, getManaCosts } from "../../../functions/Functions";
import { useRef, useState } from "react";
import {
  addCardToDeck,
  removeCardFromDeck,
  updateManaCosts,
} from "../../../features/createDeck/createDeckSlice";
import CardsInfoDialog from "../../CardsLayout/CardsInfoDialog";
import {
  setSelectedCard,
  setSelectedIndex,
} from "../../../features/selectedCard/selectedCardSlice";
import { MouseEvent } from "react";

const CardRow = ({ card }: Types.Props) => {
  const dispatch: AppDispatch = useDispatch();
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const cardRowControlRef = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const [cardPreviewPositionY, setCardPreviewPositionY] = useState(0);
  const [showCardPreview, setShowCardPreview] = useState(false);
  const [buttonAddState, setButtonAddState] = useState(false);
  const { cards } = useSelector((state: RootState) => state.cards);
  const { selectedCard } = useSelector(
    (state: RootState) => state.selectedCard
  );
  const cardOccurences = countOccurrences(deck.cards, card);
  const maxNumberOfCard = card.rarityId === 5 ? 1 : 2;
  const isMaximumReached =
    cardOccurences !== 0 && cardOccurences % maxNumberOfCard === 0
      ? true
      : false;

  const onMouseEnter = (e: MouseEvent) => {
    cardRowControlRef.current?.setAttribute(
      "style",
      "opacity: 1;transform: translate3d(0px, 0px, 0px);"
    );
    setShowCardPreview(true);
    const element = e.currentTarget as HTMLElement;
    setCardPreviewPositionY(element.offsetTop);
  };

  const onMouseLeave = () => {
    cardRowControlRef.current?.setAttribute(
      "style",
      "opacity: 0;transform: translate3d(-150%, 0px, 0px);"
    );
    setShowCardPreview(false);
  };

  const handleClickControlInfo = () => {
    setOpen(true);
    dispatch(setSelectedCard(card));
    dispatch(setSelectedIndex(cards.cards.indexOf(card)));
  };

  const handleClickControlAdd = (
    event: React.MouseEvent<HTMLButtonElement>,
    card: SharedTypes.ICardData
  ) => {
    if (isMaximumReached) {
      setButtonAddState(true);
    } else {
      dispatch(addCardToDeck(card));
      dispatch(updateManaCosts(getManaCosts([...deck.cards, card])));
    }
  };

  const handleClickControlRemove = (
    event: React.MouseEvent<HTMLButtonElement>,
    card: SharedTypes.ICardData
  ) => {
    const newState = deck.cards.filter((item) => item !== card);
    setButtonAddState(false);
    dispatch(removeCardFromDeck(card));
    dispatch(updateManaCosts(getManaCosts(newState)));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Styles.CardRowContainer
        onMouseEnter={(e) => onMouseEnter(e)}
        onMouseLeave={onMouseLeave}
      >
        {showCardPreview ? (
          <Styles.CardPreview $yHeight={cardPreviewPositionY}>
            <Styles.CardImage src={card.image} />
          </Styles.CardPreview>
        ) : null}
        <Styles.CardRowCost>
          <Styles.CardCost>{card.manaCost}</Styles.CardCost>
        </Styles.CardRowCost>
        <Styles.CardRowName>
          <Styles.CardName>{card.name}</Styles.CardName>
        </Styles.CardRowName>
        <Styles.CardRowImage image={card.cropImage} />
        <Styles.CardRowCount>
          <Styles.CardCount>
            {cardOccurences === 1 ? null : cardOccurences}
          </Styles.CardCount>
        </Styles.CardRowCount>
        <Styles.CardRowControls ref={cardRowControlRef}>
          <Styles.CardRowControlInfoButton onClick={handleClickControlInfo}>
            <Styles.ControlInfoIcon />
          </Styles.CardRowControlInfoButton>
          <Styles.CardRowControlAddButton
            disabled={buttonAddState}
            $count={isMaximumReached}
            onClick={(event) => handleClickControlAdd(event, card)}
          >
            <Styles.ControlAddIcon />
          </Styles.CardRowControlAddButton>
          <Styles.CardRowControlRemoveButton
            onClick={(event) => handleClickControlRemove(event, card)}
          >
            <Styles.ControlRemoveIcon />
          </Styles.CardRowControlRemoveButton>
        </Styles.CardRowControls>
      </Styles.CardRowContainer>
      <CardsInfoDialog
        isBrowseType={false}
        cards={selectedCard}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default CardRow;
