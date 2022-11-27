import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";
import DetailsFilterCardType from "../DetailsFilterCardType";
import DetailsFilterMinionType from "../DetailsFilterMinionType";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
      <DetailsFilterCardType />
      <DetailsFilterMinionType />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
