import * as Styles from "./DeckDetailsGameModeButton.styles";

const DeckDetailsGameModeButton = () => {
  return (
    <Styles.Container role="button" tabIndex={1}>
      <Styles.LeftListLayout />
      <Styles.CenterLayout>Przekształć na Dzicz</Styles.CenterLayout>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DeckDetailsGameModeButton;
