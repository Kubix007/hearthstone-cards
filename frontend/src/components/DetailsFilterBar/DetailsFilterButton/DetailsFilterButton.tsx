import * as Styles from "./DetailsFilterButton.style";
import * as Types from "./DetailsFilterButton.types";

const DetailsFilterButton = ({ setVisible, isVisible }: Types.Props) => {
  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <Styles.DetailsFilterContainer>
      <Styles.LeftDetailsFilterLayout />
      <Styles.DetailsFilterButton
        onClick={handleClick}
        startIcon={<Styles.DetailsFilterIcon />}
      >
        Filtry
      </Styles.DetailsFilterButton>
      <Styles.RightDetailsFilterLayout />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterButton;
