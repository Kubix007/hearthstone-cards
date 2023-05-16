import * as Styles from "./CreateDeckFilters.styles";
import NeutralCardFilter from "./NeutralCardFilter";
import ClassCardFilter from "./ClassCardFilter";

const CreateDeckFilters = () => {
  return (
    <Styles.CreateDeckFiltersContainer>
      <ClassCardFilter />
      <NeutralCardFilter />
    </Styles.CreateDeckFiltersContainer>
  );
};

export default CreateDeckFilters;
