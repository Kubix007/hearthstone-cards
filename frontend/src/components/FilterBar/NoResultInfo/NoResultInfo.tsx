import * as Styles from "./NoResultInfo.style";
import Grid from "@mui/material/Grid";

const NoResultInfo = () => {
  return (
    <Styles.NoResultInfoContainer>
      <Styles.ImageContainer />
      <Styles.TopBackground />
      <Styles.TextInfoContainer
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Grid item>
          <Styles.HeaderInfo>Nie znaleziono kart</Styles.HeaderInfo>
        </Grid>
        <Grid item>
          <Styles.DetailsInfo>
            Usuń parametr(y) wyszukiwania, aby uzyskać lepsze rezultaty
          </Styles.DetailsInfo>
        </Grid>
      </Styles.TextInfoContainer>
      <Styles.BottomBackground />
    </Styles.NoResultInfoContainer>
  );
};

export default NoResultInfo;
