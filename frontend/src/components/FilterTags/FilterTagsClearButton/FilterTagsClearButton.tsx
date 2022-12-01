import * as Styles from "./FilterTagsClearButton.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { reset } from "../../../features/filter/filterSlice";

const FilterTagsClearButton = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <Styles.ClearButton onClick={() => dispatch(reset())}>
      Wyczyść wszystko
    </Styles.ClearButton>
  );
};

export default FilterTagsClearButton;
