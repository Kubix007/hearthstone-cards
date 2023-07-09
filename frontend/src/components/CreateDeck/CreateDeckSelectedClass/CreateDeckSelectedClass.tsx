import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../app/store";
import { reset } from "../../../features/auth/authSlice";
import Spinner from "../../Spinner";
import BottomPagination from "../../BottomPagination";
import FilterTags from "../../FilterTags";
import NoResultInfo from "../../FilterBar/NoResultInfo";
import CardsLayout from "../../CardsLayout";
import FilterBar from "../../FilterBar";
import DeckList from "../DeckList";
import MobileDeckButton from "../MobileDeckButton";
import * as SharedStyles from "../../../shared/styles";
import * as Styles from "./CreateDeckSelectedClass.styles";
import DeckListDrawer from "../DeckListDrawer";

const CreateDeckSelectedClass = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const filters = useSelector((state: RootState) => state.filter);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
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

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch, filters]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (screenWidth <= 1280) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setIsShowed(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);

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
        <Styles.ContentContainer $isMobile={isMobile}>
          <Styles.Center>
            <FilterTags type="CREATE" />
            <div>
              {cards.cardCount === 0 ? (
                <NoResultInfo />
              ) : (
                <Styles.CardsContainer>
                  <Styles.Cards size={1100}>
                    {cards.cards.map((card) => (
                      <CardsLayout type="CREATE" key={card.id} card={card} />
                    ))}
                  </Styles.Cards>
                </Styles.CardsContainer>
              )}
            </div>
          </Styles.Center>
          {isMobile ? (
            <MobileDeckButton setIsShowed={setIsShowed} />
          ) : (
            <Styles.DeckContainer>
              <DeckList />
            </Styles.DeckContainer>
          )}
        </Styles.ContentContainer>
        <BottomPagination />
        <DeckListDrawer $isShowed={isShowed} setIsShowed={setIsShowed} />
      </Styles.Container>
    );
  }
};

export default CreateDeckSelectedClass;
