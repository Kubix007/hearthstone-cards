import Grid from "@mui/material/Grid";
import * as Styles from "./NoResultInfo.style";
import * as Types from "./NoResultInfo.types";

const NoResultInfo = ({ headerInfo, detailsInfo }: Types.IProps) => {
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
          <Styles.HeaderInfo>{headerInfo}</Styles.HeaderInfo>
        </Grid>
        <Grid item>
          <Styles.DetailsInfo>{detailsInfo}</Styles.DetailsInfo>
        </Grid>
      </Styles.TextInfoContainer>
      <Styles.BottomBackground />
    </Styles.NoResultInfoContainer>
  );
};

export default NoResultInfo;
