import * as Styles from "./FilterTagsClearButton.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { reset } from "../../../features/filter/filterSlice";

const clearManaContainer = () => {
  const manaCrystalElements = document.getElementsByClassName("manaCrystal");
  for (let i = 0; i < manaCrystalElements.length; i++) {
    manaCrystalElements[i].setAttribute(
      "class",
      `${manaCrystalElements[i].getAttribute("class")!}`
        .replace("selected", "")
        .trimEnd()
    );
  }
};

const FilterTagsClearButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(reset());
    clearManaContainer();
  };
  return (
    <Styles.ClearButton onClick={handleClick}>
      Wyczyść wszystko
    </Styles.ClearButton>
  );
};

export default FilterTagsClearButton;
