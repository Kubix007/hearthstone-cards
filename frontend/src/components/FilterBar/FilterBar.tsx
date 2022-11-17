import * as Styles from "./FilterBart.style";
import ManaCostFilter from "../ManaCostFilter";
import ClassFilter from "../ClassFilter";
import TypeCardsFilter from "../TypeCardsFilter";
import SearchFilter from "../SearchFilter";

const FilterBar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Styles.FilterBarContainer>
        &nbsp;
        <Styles.FiltersContainer>
          <TypeCardsFilter />
          <ClassFilter />
          <ManaCostFilter />
          <SearchFilter />
        </Styles.FiltersContainer>
      </Styles.FilterBarContainer>
    </div>
  );
};

export default FilterBar;
