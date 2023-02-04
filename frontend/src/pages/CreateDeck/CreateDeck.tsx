import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { reset } from "../../features/auth/authSlice";
import * as Styles from "./CreateDeck.styles";
import FormatSelector from "../../components/CreateDeck/FormatSelector";
import ClassSelectorList from "../../components/CreateDeck/ClassSelectorList";
import PageHeader from "../../components/CreateDeck/PageHeader";
import { Grid } from "@mui/material";

const CreateDeck = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

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
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Styles.PageLayout>
      <Styles.ContentLayout
        container
        justifyContent="center"
        alignContent="center"
        direction="column"
      >
        <Grid item>
          <FormatSelector />
        </Grid>
        <Grid style={{ width: "70%" }} item>
          <ClassSelectorList />
        </Grid>
      </Styles.ContentLayout>
    </Styles.PageLayout>
  );
};

export default CreateDeck;
