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
import DeckListCopyDeckMenu from "./DeckListCopyDeckMenu";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const DeckList = () => {
  const [isClickedDropdownMenu, setIsClickedDropdownMenu] = useState(false);
  const [isClickedCopyDeckMenu, setIsClickedCopyDeckMenu] = useState(false);
  const { deck } = useSelector((state: RootState) => state.createDeck);

  const handleClickDropdownMenu = () => {
    setIsClickedDropdownMenu((prevState) => !prevState);
  };

  const handleClickCopyDeckMenu = () => {
    setIsClickedCopyDeckMenu((prevState) => !prevState);
  };

  return (
    <Styles.DeckListLayout>
      <Styles.DeckListTopBorder onClick={handleClickDropdownMenu}>
        <Styles.DeckTitleContainer>
          <Styles.DeckTitleBorder>
            <DeckListClassBackground />
            <DeckListArrowIcon $isclicked={isClickedDropdownMenu} />
          </Styles.DeckTitleBorder>
          {isClickedDropdownMenu ? <DeckListDropdownDetails /> : null}
        </Styles.DeckTitleContainer>
      </Styles.DeckListTopBorder>
      <Styles.DeckListCenterBorder>
        {deck.cardCount < 1 ? <DeckListEmpty /> : <CardRowList />}
      </Styles.DeckListCenterBorder>
      <Styles.DeckListBottomBorder>
        {isClickedCopyDeckMenu ? <DeckListCopyDeckMenu /> : null}
        <CopyDeckButton
          $isclicked={isClickedCopyDeckMenu}
          handleClick={handleClickCopyDeckMenu}
        />
        <ButtonsDivider />
        <NewDeckButton />
      </Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
