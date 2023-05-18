import * as Styles from "./CopyDeckButton.styles";
import * as Types from "./CopyDeckButton.types";

const CopyDeckButton = ({ $isclicked, handleClick }: Types.IProps) => {
  return (
    <Styles.ButtonContainer onClick={handleClick}>
      <Styles.CopyDeckButton>Skopiuj talie</Styles.CopyDeckButton>
      <Styles.CopyDeckArrow $isclicked={$isclicked} />
    </Styles.ButtonContainer>
  );
};

export default CopyDeckButton;
