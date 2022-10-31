import * as Styles from "./FilterBart.style";
import ManaCostFilter from "../ManaCostFilter";

const FilterBar = () => {
  return (
    <div style={{ width: "100%" }}>
      <Styles.FilterBarContainer>
        &nbsp;
        <Styles.FiltersContainer>
          <ManaCostFilter />
        </Styles.FiltersContainer>
      </Styles.FilterBarContainer>
    </div>
  );
};

export default FilterBar;
