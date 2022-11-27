import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";
import DetailsFilterCardType from "../DetailsFilterCardType";
import DetailsFilterMinionType from "../DetailsFilterMinionType";
import DetailsFilterSpellSchool from "../DetailsFilterSpellSchool";
import DetailsFilterRarity from "../DetailsFilterRarity";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
      <DetailsFilterCardType />
      <DetailsFilterMinionType />
      <DetailsFilterSpellSchool />
      <DetailsFilterRarity />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
