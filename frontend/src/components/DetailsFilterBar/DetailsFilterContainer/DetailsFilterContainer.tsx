import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";
import DetailsFilterCardType from "../DetailsFilterCardType";
import DetailsFilterMinionType from "../DetailsFilterMinionType";
import DetailsFilterSpellSchool from "../DetailsFilterSpellSchool";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
      <DetailsFilterCardType />
      <DetailsFilterMinionType />
      <DetailsFilterSpellSchool />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
