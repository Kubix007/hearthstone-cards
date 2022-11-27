import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";
import DetailsFilterCardType from "../DetailsFilterCardType";
import DetailsFilterMinionType from "../DetailsFilterMinionType";
import DetailsFilterSpellSchool from "../DetailsFilterSpellSchool";
import DetailsFilterRarity from "../DetailsFilterRarity";
import DetailsFilterKeywords from "../DetailsFilterKeywords";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
      <DetailsFilterCardType />
      <DetailsFilterMinionType />
      <DetailsFilterSpellSchool />
      <DetailsFilterRarity />
      <DetailsFilterKeywords />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
