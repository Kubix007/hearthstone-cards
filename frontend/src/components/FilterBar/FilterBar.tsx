import * as Styles from "./FilterBart.style";
import ManaCostFilter from "../ManaCostFilter";
import ClassFilter from "../ClassFilter";
import TypeCardsFilter from "../TypeCardsFilter";

const FilterBar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Styles.FilterBarContainer>
        &nbsp;
        <Styles.FiltersContainer>
          <TypeCardsFilter />
          <ClassFilter />
          <ManaCostFilter />
        </Styles.FiltersContainer>
      </Styles.FilterBarContainer>
    </div>
  );
};

export default FilterBar;
