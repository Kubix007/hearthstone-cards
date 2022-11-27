import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { reset } from "../../features/auth/authSlice";
import { getAllCards } from "../../features/cards/cardsSlice";
import * as Styles from "./BrowseCards.style";
import * as SharedStyles from "../../shared/styles";
import CardsLayout from "../../components/CardsLayout";
import FilterBar from "../../components/FilterBar";

const BrowseCards = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector(
    (state: RootState) => state.auth
  );

  const { filters } = useSelector((state: RootState) => state.filter);

  const {
    cards,
    isLoading: isLoadingCards,
    isError: isErrorCards,
    message: messageCards,
  } = useSelector((state: RootState) => state.cards);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAllCards(filters));

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch, filters]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <SharedStyles.Container>
      <FilterBar />
      <Styles.CardsContainer>
        <Styles.Cards>
          {cards.cards.map((card) => (
            <CardsLayout key={card.id} cards={card} />
          ))}
        </Styles.Cards>
      </Styles.CardsContainer>
    </SharedStyles.Container>
  );
};

export default BrowseCards;
