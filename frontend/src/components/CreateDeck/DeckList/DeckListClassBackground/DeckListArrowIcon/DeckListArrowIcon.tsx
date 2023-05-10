import * as Styles from "./DeckListArrowIcon.styles";
import * as Types from "./DeckListArrowIcon.types";

const DeckListArrowIcon = ({ $isclicked }: Types.Props) => {
  return <Styles.ArrowIcon $isclicked={$isclicked} />;
};

export default DeckListArrowIcon;
