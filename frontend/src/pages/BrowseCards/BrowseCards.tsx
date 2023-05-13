import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import * as Styles from "./BrowseCards.style";
import * as SharedStyles from "../../shared/styles";
import CardsLayout from "../../components/CardsLayout";
import FilterBar from "../../components/FilterBar";
import FilterTags from "../../components/FilterTags";
import NoResultInfo from "../../components/FilterBar/NoResultInfo";
import BottomPagination from "../../components/BottomPagination";

const BrowseCards = () => {
  const navigate = useNavigate();
  const filters = useSelector((state: RootState) => state.filter);
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
  }, [user, navigate, isError, message, filters]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isLoadingCards) {
    return (
      <SharedStyles.Container>
        <FilterBar showClassFilter={true} />
        <Spinner />
      </SharedStyles.Container>
    );
  } else {
    return (
      <SharedStyles.Container>
        <FilterBar showClassFilter={true} />
        <Styles.Center>
          <FilterTags type="BROWSE" />
          {cards.cardCount === 0 ? (
            <NoResultInfo />
          ) : (
            <Styles.CardsContainer>
              <Styles.Cards size={1300}>
                {cards.cards.map((card) => (
                  <CardsLayout type="BROWSE" key={card.id} card={card} />
                ))}
              </Styles.Cards>
            </Styles.CardsContainer>
          )}
        </Styles.Center>
        <BottomPagination />
      </SharedStyles.Container>
    );
  }
};

export default BrowseCards;
