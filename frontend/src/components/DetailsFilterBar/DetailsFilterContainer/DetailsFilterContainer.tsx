import * as Styles from "./DetailsFilterContainer.style";
import DetailsFilterAttack from "../DetailsFilterAttack";
import DetailsFilterHealth from "../DetailsFilterHealth";
import DetailsFilterTypeCard from "../DetailsFilterTypeCard";

const DetailsFilterContainer = () => {
  return (
    <Styles.DetailsFilterContainer>
      <DetailsFilterAttack />
      <DetailsFilterHealth />
      <DetailsFilterTypeCard />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterContainer;
