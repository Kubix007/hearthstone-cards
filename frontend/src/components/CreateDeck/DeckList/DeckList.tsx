import { useState } from "react";
import * as Styles from "./DeckList.styles";
import DeckListClassBackground from "./DeckListClassBackground";
import DeckListArrowIcon from "./DeckListClassBackground/DeckListArrowIcon";
import CopyDeckButton from "./DeckListButtons/CopyDeckButton";
import NewDeckButton from "./DeckListButtons/NewDeckButton";
import ButtonsDivider from "./DeckListButtons/ButtonsDivider";

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
      <Styles.DeckListBottomBorder>
        <ButtonsDivider />
        <NewDeckButton />
      </Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
