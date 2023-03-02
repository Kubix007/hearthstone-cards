import * as Styles from "./FilterBar.style";
import * as Types from "./FilterBar.types";
import ManaCostFilter from "./ManaCostFilter";
import ClassFilter from "./ClassFilter";
import TypeCardsFilter from "./TypeCardsFilter";
import SearchFilter from "./SearchFilter";
import DetailsFilterButton from "../DetailsFilterBar/DetailsFilterButton";
import DetailsFilterContainer from "../DetailsFilterBar/DetailsFilterContainer";
import ManaCostFilterMobile from "./ManaCostFilterMobile";
import { useState } from "react";

const FilterBar = ({ showClassFilter }: Types.IFilterBarProps) => {
  const [isVisible, setVisible] = useState(false);
  return (
    <Styles.Container>
      <Styles.TopBarContainer />
      <Styles.FiltersContainer>
        <TypeCardsFilter />
        {showClassFilter && <ClassFilter />}
        <ManaCostFilter />
        <ManaCostFilterMobile />
        <SearchFilter />
        <DetailsFilterButton setVisible={setVisible} isVisible={isVisible} />
      </Styles.FiltersContainer>
      {isVisible && <DetailsFilterContainer />}
      {/* <Styles.BottomBarContainer /> */}
    </Styles.Container>
  );
};

export default FilterBar;
