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
import FilterTags from "../../components/FilterTags";
import NoResultInfo from "../../components/FilterBar/NoResultInfo";

const BrowseCards = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { filters } = useSelector((state: RootState) => state.filter);
  const { cards, isLoading: isLoadingCards } = useSelector(
    (state: RootState) => state.cards
  );

  const { user, isLoading, isError, message } = useSelector(
    (state: RootState) => state.auth
  );

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

  if (isLoadingCards) {
    return (
      <SharedStyles.Container>
        <FilterBar />
        <Spinner />
      </SharedStyles.Container>
    );
  } else {
    return (
      <SharedStyles.Container>
        <FilterBar />
        <FilterTags />
        {cards.cardCount === 0 ? (
          <NoResultInfo />
        ) : (
          <Styles.CardsContainer>
            <Styles.Cards>
              {cards.cards.map((card) => (
                <CardsLayout key={card.id} cards={card} />
              ))}
            </Styles.Cards>
          </Styles.CardsContainer>
        )}
      </SharedStyles.Container>
    );
  }
};

export default BrowseCards;
