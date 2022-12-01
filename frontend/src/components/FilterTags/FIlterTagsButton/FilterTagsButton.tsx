import * as Styles from "./FilterTagsButton.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { Props } from "./FilterTagsButton.types";
import { useEffect } from "react";

const FilterTagsButton = ({
  filters,
  dispatchAction,
  initialValue,
  helpFunction,
  setAmountOfTags,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(dispatchAction(initialValue));
    if (typeof helpFunction === "function") {
      helpFunction();
    }
    setAmountOfTags((prevValue: number) => prevValue - 0.5);
  };

  useEffect(() => {
    setAmountOfTags((prevValue: number) => prevValue + 0.5);
  }, [setAmountOfTags]);

  return (
    <Styles.FilterTags onClick={handleClick}>
      {filters}
      <Styles.CloseIcon>X</Styles.CloseIcon>
    </Styles.FilterTags>
  );
};

export default FilterTagsButton;
