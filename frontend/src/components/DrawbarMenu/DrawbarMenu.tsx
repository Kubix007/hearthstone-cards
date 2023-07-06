import * as Types from "./DrawbarMenu.types";
import * as Styles from "./DrawbarMenu.styles";
import CreateDeckFilters from "../FilterBar/CreateDeckFilters";
import ClassFilter from "../FilterBar/ClassFilter";
import ManaCostFilterMobile from "../FilterBar/ManaCostFilterMobile";
import DetailsFilterAttack from "../DetailsFilterBar/DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterBar/DetailsFilterHealth";
import DetailsFilterCardType from "../DetailsFilterBar/DetailsFilterCardType";
import DetailsFilterSpellSchool from "../DetailsFilterBar/DetailsFilterSpellSchool";
import DetailsFilterMinionType from "../DetailsFilterBar/DetailsFilterMinionType";
import DetailsFilterRarity from "../DetailsFilterBar/DetailsFilterRarity";
import DetailsFilterKeywords from "../DetailsFilterBar/DetailsFilterKeywords";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import SortSelect from "../FilterTags/SortSelect";
import PaginationSelect from "../FilterTags/PaginationSelect";

const DrawbarMenu = ({
  isShowed,
  setIsShowed,
  showClassFilter,
}: Types.IProps) => {
  const { cards } = useSelector((state: RootState) => state.cards);

  const toggleDrawer = () => {
    setIsShowed(!isShowed);
  };

  return (
    <Styles.Drawer
      anchor="right"
      open={isShowed}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      <Styles.Content>
        <Styles.InfoHeader>
          <Styles.CloseButton onClick={toggleDrawer}>
            <Styles.CloseIcon>X</Styles.CloseIcon>Zamknij
          </Styles.CloseButton>
          <Styles.CardsInfo>
            Znalezione karty: {cards.cardCount}
          </Styles.CardsInfo>
        </Styles.InfoHeader>
        <Styles.Sorting>
          <Styles.CardsInfo>Sortowanie:</Styles.CardsInfo>
          <SortSelect $isShowed={isShowed} />
          <PaginationSelect $isShowed={isShowed} />
        </Styles.Sorting>
        <Styles.Filters>
          <Styles.CardsInfo>Filtry:</Styles.CardsInfo>
          {!showClassFilter && <CreateDeckFilters />}
          {showClassFilter && <ClassFilter isShowed={isShowed} />}
          <ManaCostFilterMobile isShowed={isShowed} />
          <DetailsFilterAttack isShowed={isShowed} />
          <DetailsFilterHealth isShowed={isShowed} />
          <DetailsFilterCardType />
          <DetailsFilterMinionType />
          <DetailsFilterSpellSchool />
          <DetailsFilterRarity />
          <DetailsFilterKeywords />
        </Styles.Filters>
      </Styles.Content>
    </Styles.Drawer>
  );
};

export default DrawbarMenu;
