import * as Styles from "./CreateDeckFilters.styles";
import NeutralCardFilter from "./NeutralCardFilter";
import ClassCardFilter from "./ClassCardFilter";

const CreateDeckFilters = () => {
  return (
    <Styles.CreateDeckFiltersContainer>
      <Styles.CreateDeckFiltersBackground>
        <ClassCardFilter />
        <NeutralCardFilter />
      </Styles.CreateDeckFiltersBackground>
    </Styles.CreateDeckFiltersContainer>
  );
};

export default CreateDeckFilters;
