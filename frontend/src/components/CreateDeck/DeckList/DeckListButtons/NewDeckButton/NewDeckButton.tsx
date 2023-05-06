import { Tooltip } from "@mui/material";
import * as Styles from "./NewDeckButton.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../app/store";
import { reset } from "../../../../../features/createDeck/createDeckSlice";

const NewDeckButton = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Tooltip
      title={<Styles.NewDeckTooltip>Nowa talia</Styles.NewDeckTooltip>}
      placement="top"
    >
      <Styles.ButtonContainer>
        <Styles.CreateNewDeckButton onClick={() => dispatch(reset())}>
          <Styles.CreateNewDeckIcon />
        </Styles.CreateNewDeckButton>
      </Styles.ButtonContainer>
    </Tooltip>
  );
};

export default NewDeckButton;
