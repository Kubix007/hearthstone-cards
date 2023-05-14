import { useState } from "react";
import * as Styles from "./DeckList.styles";
import DeckListClassBackground from "./DeckListClassBackground";
import DeckListArrowIcon from "./DeckListClassBackground/DeckListArrowIcon";
import DeckListDropdownDetails from "./DeckListDropdownDetails";
import CopyDeckButton from "./DeckListButtons/CopyDeckButton";
import NewDeckButton from "./DeckListButtons/NewDeckButton";
import ButtonsDivider from "./DeckListButtons/ButtonsDivider";
import DeckListEmpty from "./DeckListEmpty";
import CardRowList from "../CardRowList";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const DeckList = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <Styles.DeckListLayout>
      <Styles.DeckListTopBorder onClick={handleClick}>
        <Styles.DeckTitleContainer>
          <Styles.DeckTitleBorder>
            <DeckListClassBackground />
            <DeckListArrowIcon $isclicked={isClicked} />
          </Styles.DeckTitleBorder>
          {isClicked ? <DeckListDropdownDetails /> : null}
        </Styles.DeckTitleContainer>
      </Styles.DeckListTopBorder>
      <Styles.DeckListCenterBorder>
        {deck.cardCount < 1 ? <DeckListEmpty /> : <CardRowList />}
      </Styles.DeckListCenterBorder>
      <Styles.DeckListBottomBorder>
        <CopyDeckButton />
        <ButtonsDivider />
        <NewDeckButton />
      </Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
