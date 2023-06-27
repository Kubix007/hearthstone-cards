import DeckCardBackground from "../DeckCardBackground";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import {
  updateManaCosts,
  viewDeck,
} from "../../../features/createDeck/createDeckSlice";
import { getManaCosts } from "../../../functions/Functions";
import * as Types from "./DeckCard.types";
import * as Styles from "./DeckCard.styles";

const DeckCard = ({ decks }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = async () => {
    await navigate("/createdeck");
    dispatch(updateManaCosts(getManaCosts(decks.cards)));
    dispatch(viewDeck(decks));
  };

  return (
    <Styles.Container onClick={handleClick}>
      <DeckCardBackground deck={decks} />
    </Styles.Container>
  );
};

export default DeckCard;
