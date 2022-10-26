import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { reset } from "../../features/auth/authSlice";
import { getAllCards } from "../../features/cards/cardsSlice";

const BrowseCards = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, message } = useSelector(
    (state: RootState) => state.auth
  );

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

    dispatch(getAllCards());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return <div>Przeglądaj karty</div>;
};

export default BrowseCards;
