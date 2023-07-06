import * as Styles from "./MobileButton.styles";
import * as Types from "./MobileButton.types";

const DetailsFilterButton = ({ setIsShowed, isShowed }: Types.Props) => {
  const handleClick = () => {
    setIsShowed(!isShowed);
  };

  return (
    <Styles.MobileButtonContainer>
      <Styles.LeftMobileButtonLayout />
      <Styles.FiltersMobileButton onClick={handleClick}>
        <Styles.MobileButtonIcon />
      </Styles.FiltersMobileButton>
      <Styles.RightMobileButtonLayout />
    </Styles.MobileButtonContainer>
  );
};

export default DetailsFilterButton;
