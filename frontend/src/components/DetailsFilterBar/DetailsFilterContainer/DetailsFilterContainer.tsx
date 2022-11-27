import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
