import * as Styles from "./FilterTagsButton.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { Props } from "./FilterTagsButton.types";

const FilterTagsButton = ({
  filters,
  dispatchAction,
  initialValue,
  helpFunction,
}: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(dispatchAction(initialValue));
    if (typeof helpFunction === "function") {
      helpFunction();
    }
  };
  return (
    <Styles.FilterTags onClick={handleClick}>
      {filters}
      <Styles.CloseIcon>X</Styles.CloseIcon>
    </Styles.FilterTags>
  );
};

export default FilterTagsButton;
