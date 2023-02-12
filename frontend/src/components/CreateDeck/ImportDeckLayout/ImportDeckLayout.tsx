import { Grid } from "@mui/material";
import ImportDeckButton from "./ImportDeckButton";
import ImportDeckInput from "./ImportDeckInput";
import * as Styles from "./ImportDeckLayout.styles";

const ImportDeckLayout = () => {
  return (
    <Styles.ImportDeckLayout container justifyContent="flex-start">
      <Grid item>
        <ImportDeckInput />
      </Grid>
      <Grid item>
        <ImportDeckButton />
      </Grid>
    </Styles.ImportDeckLayout>
  );
};

export default ImportDeckLayout;
