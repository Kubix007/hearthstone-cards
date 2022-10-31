import * as Styles from "./ManaCostFilter.style";

const ManaCostFilter = () => {
  const manaCrystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];

  return (
    <Styles.ManaCostFilterContainer>
      <Styles.ManaCostFilterContainerLeft />
      <Styles.ManaCostFilterContainerCenter>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "58px",
          }}
        >
          {manaCrystals.map((item) => (
            <Styles.ManaCrystal>{item}</Styles.ManaCrystal>
          ))}
        </div>
      </Styles.ManaCostFilterContainerCenter>
      <Styles.ManaCostFilterContainerRight />
    </Styles.ManaCostFilterContainer>
  );
};

export default ManaCostFilter;
