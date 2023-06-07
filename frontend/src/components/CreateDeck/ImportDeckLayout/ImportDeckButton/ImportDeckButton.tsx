import * as Styles from "./ImportDeckButton.styles";
import * as Types from "./ImportDeckButton.types";
import { getDeckByCode } from "../../../../features/createDeck/createDeckSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";

const ImportDeckButton = ({ inputValue }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDeckByCode(inputValue));
  };

  return (
    <Styles.ImportDeckButtonContainer>
      <Styles.LeftImportDeckButtonLayout />
      <Styles.ImportDeckButton onClick={handleClick}>
        Importuj
      </Styles.ImportDeckButton>
      <Styles.RightImportDeckButtonLayout />
    </Styles.ImportDeckButtonContainer>
  );
};

export default ImportDeckButton;
