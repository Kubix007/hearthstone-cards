import * as Styles from "./ImportDeckButton.styles";
import * as Types from "./ImportDeckButton.types";
import { getDeckByCode } from "../../../../features/createDeck/createDeckSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";
import { toast } from "react-toastify";

const ImportDeckButton = ({ inputValue }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(getDeckByCode(inputValue))
      .then(() => {
        toast.success("Pomyślnie załadowano talię");
      })
      .catch(() => {
        toast.error("Nie udało się załadować talię");
      });
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
