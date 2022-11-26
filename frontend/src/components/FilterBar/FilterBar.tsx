import * as Styles from "./FilterBar.style";
import ManaCostFilter from "../ManaCostFilter";
import ClassFilter from "../ClassFilter";
import TypeCardsFilter from "../TypeCardsFilter";
import SearchFilter from "../SearchFilter";
import DetailsFilterButton from "../DetailsFilter/DetailsFilterButton";
import DetailsFilterBar from "../DetailsFilter/DetailsFilterBar";

const FilterBar = () => {
  return (
    <Styles.Container>
      <Styles.FilterBarContainer />
      <Styles.FiltersContainer>
        <TypeCardsFilter />
        <ClassFilter />
        <ManaCostFilter />
        <SearchFilter />
        <DetailsFilterButton />
      </Styles.FiltersContainer>
      {/* <DetailsFilterBar /> */}
    </Styles.Container>
  );
};

export default FilterBar;
