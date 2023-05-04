import { useState } from "react";
import * as Styles from "./CopyDeckButton.styles";

const CopyDeckButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <Styles.ButtonContainer onClick={handleClick}>
      <Styles.CopyDeckButton>Skopiuj talie</Styles.CopyDeckButton>
      <Styles.CopyDeckArrow isClicked={isClicked} />
    </Styles.ButtonContainer>
  );
};

export default CopyDeckButton;
