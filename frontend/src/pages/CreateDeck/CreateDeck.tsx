import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import Spinner from "../../components/Spinner";
import { reset } from "../../features/createDeck/createDeckSlice";
import { reset as resetFilters } from "../../features/filter/filterSlice";
import FormatSelector from "../../components/CreateDeck/FormatSelector";
import ClassSelectorList from "../../components/CreateDeck/ClassSelectorList";
import { Grid } from "@mui/material";
import ImportDeckLayout from "../../components/CreateDeck/ImportDeckLayout";
import * as Styles from "./CreateDeck.styles";
import * as SharedTypes from "../../shared/types";
import CreateDeckSelectedClass from "../../components/CreateDeck/CreateDeckSelectedClass";

const CreateDeck = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFormat, setSelectedFormat] =
    useState<SharedTypes.ISelectedFormat>({
      standard: true,
      classic: false,
      wild: false,
    });

  const { user, isLoading, isError, message } = useSelector(
    (state: RootState) => state.auth
  );

  const { isSelected } = useSelector((state: RootState) => state.createDeck);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
      dispatch(resetFilters());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isSelected) {
    return (
      <Styles.Container>
        <CreateDeckSelectedClass />
      </Styles.Container>
    );
  }
  return (
    <Styles.PageLayout>
      <Styles.ContentLayout
        container
        justifyContent="center"
        alignContent="center"
        direction="column"
      >
        <ImportDeckLayout />
        <Grid item>
          <FormatSelector setSelectedFormat={setSelectedFormat} />
        </Grid>
        <Grid style={{ width: "70%" }} item>
          <ClassSelectorList selectedFormat={selectedFormat} />
        </Grid>
      </Styles.ContentLayout>
    </Styles.PageLayout>
  );
};

export default CreateDeck;
