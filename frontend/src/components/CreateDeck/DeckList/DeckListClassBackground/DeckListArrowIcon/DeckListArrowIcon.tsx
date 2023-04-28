import * as Styles from "./DeckListArrowIcon.styles";
import * as Types from "./DeckListArrowIcon.types";

const DeckListArrowIcon = ({ isClicked }: Types.Props) => {
  return <Styles.ArrowIcon isClicked={isClicked} />;
};

export default DeckListArrowIcon;
