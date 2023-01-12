import { Grid } from "@mui/material";
import * as Styles from "./FormatSelector.styles";

const FormatSelector = () => {
  return (
    <Styles.FormatSelectorContainer
      container
      justifyContent="center"
      spacing={8}
    >
      <Grid item>
        <Styles.StandardFormatButton>
          <Styles.StandardFormatSVG />
        </Styles.StandardFormatButton>
      </Grid>
      <Grid item>
        <Styles.ClassicFormatButton />
      </Grid>
      <Grid item>
        <Styles.WildFormatButton />
      </Grid>
    </Styles.FormatSelectorContainer>
  );
};

export default FormatSelector;
