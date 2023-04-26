import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../app/store";
import { reset } from "../../../features/auth/authSlice";
import { getAllCards } from "../../../features/cards/cardsSlice";
import { getMetadata } from "../../../features/metadata/metadataSlice";
import * as SharedStyles from "../../../shared/styles";
import * as Styles from "./CreateDeckSelectedClass.styles";
import Spinner from "../../Spinner";
import BottomPagination from "../../BottomPagination";
import FilterTags from "../../FilterTags";
import NoResultInfo from "../../FilterBar/NoResultInfo";
import CardsLayout from "../../CardsLayout";
import FilterBar from "../../FilterBar";
import DeckList from "../DeckList";

const CreateDeckSelectedClass = () => {
  const dispatch: AppDispatch = useDispatch();
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

    dispatch(getAllCards(filters));
    dispatch(getMetadata());

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
        <FilterBar showClassFilter={false} />
        <Spinner />
      </SharedStyles.Container>
    );
  } else {
    return (
      <Styles.Container>
        <FilterBar showClassFilter={false} />
        <Styles.ContentContainer>
          <Styles.Center>
            <FilterTags />
            <div>
              {cards.cardCount === 0 ? (
                <NoResultInfo />
              ) : (
                <Styles.CardsContainer>
                  <Styles.Cards size={1100}>
                    {cards.cards.map((card) => (
                      <CardsLayout key={card.id} card={card} />
                    ))}
                  </Styles.Cards>
                </Styles.CardsContainer>
              )}
            </div>
          </Styles.Center>
          <Styles.DeckContainer>
            <DeckList />
          </Styles.DeckContainer>
        </Styles.ContentContainer>
        <BottomPagination />
      </Styles.Container>
    );
  }
};

export default CreateDeckSelectedClass;
