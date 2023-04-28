import { useState } from "react";
import * as Styles from "./DeckList.styles";
import DeckListClassBackground from "./DeckListClassBackground";
import DeckListArrowIcon from "./DeckListClassBackground/DeckListArrowIcon";

const DeckList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <Styles.DeckListLayout>
      <Styles.DeckListTopBorder onClick={handleClick}>
        <Styles.DeckTitleContainer>
          <Styles.DeckTitleBorder>
            <DeckListClassBackground />
            <DeckListArrowIcon isClicked={isClicked} />
          </Styles.DeckTitleBorder>
        </Styles.DeckTitleContainer>
      </Styles.DeckListTopBorder>
      <Styles.DeckListCenterBorder></Styles.DeckListCenterBorder>
      <Styles.DeckListBottomBorder></Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
