import * as Styles from "./DetailsFilterButton.style";

const DetailsFilterButton = () => {
  return (
    <Styles.DetailsFilterContainer>
      <Styles.LeftDetailsFilterLayout />
      <Styles.DetailsFilterButton startIcon={<Styles.DetailsFilterIcon />}>
        Filtry
      </Styles.DetailsFilterButton>
      <Styles.RightDetailsFilterLayout />
    </Styles.DetailsFilterContainer>
  );
};

export default DetailsFilterButton;
