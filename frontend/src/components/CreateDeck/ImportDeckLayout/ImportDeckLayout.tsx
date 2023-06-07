import { Grid } from "@mui/material";
import ImportDeckButton from "./ImportDeckButton";
import ImportDeckInput from "./ImportDeckInput";
import * as Styles from "./ImportDeckLayout.styles";
import { useState } from "react";

const ImportDeckLayout = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Styles.ImportDeckLayout container justifyContent="flex-start">
      <Grid item>
        <ImportDeckInput
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </Grid>
      <Grid item>
        <ImportDeckButton inputValue={inputValue} />
      </Grid>
    </Styles.ImportDeckLayout>
  );
};

export default ImportDeckLayout;
