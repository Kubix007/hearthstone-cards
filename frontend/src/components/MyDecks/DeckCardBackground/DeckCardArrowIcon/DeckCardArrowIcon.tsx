import * as Styles from "./DeckCardArrowIcon.styles";
import * as Types from "./DeckCardArrowIcon.types";

const DeckCardArrowIcon = ({ $isclicked }: Types.Props) => {
  return <Styles.ArrowIcon $isclicked={$isclicked} />;
};

export default DeckCardArrowIcon;
