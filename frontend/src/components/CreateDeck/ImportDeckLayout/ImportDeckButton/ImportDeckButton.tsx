import * as Styles from "./ImportDeckButton.styles";

const ImportDeckButton = () => {
  const handleClick = () => {
    console.log("Button Import Deck clicked!");
  };

  return (
    <Styles.ImportDeckButtonContainer>
      <Styles.LeftImportDeckButtonLayout />
      <Styles.ImportDeckButton onClick={handleClick}>
        Importuj
      </Styles.ImportDeckButton>
      <Styles.RightImportDeckButtonLayout />
    </Styles.ImportDeckButtonContainer>
  );
};

export default ImportDeckButton;
