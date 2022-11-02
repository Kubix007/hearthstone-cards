import * as Styles from "./FilterBart.style";
import ManaCostFilter from "../ManaCostFilter";
import ClassFilter from "../ClassFilter";

const FilterBar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Styles.FilterBarContainer>
        &nbsp;
        <Styles.FiltersContainer>
          <ClassFilter />
          <ManaCostFilter />
        </Styles.FiltersContainer>
      </Styles.FilterBarContainer>
    </div>
  );
};

export default FilterBar;
