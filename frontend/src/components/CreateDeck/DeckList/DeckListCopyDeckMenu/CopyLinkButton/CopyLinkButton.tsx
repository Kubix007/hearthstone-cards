import * as Styles from "./CopyLinkButton.styles";

const CopyLinkButton = () => {
  return (
    <Styles.CopyLinkButtonContainer>
      <Styles.PrimaryText>Kopiuj URL</Styles.PrimaryText>
      <Styles.SecondaryText>
        Udostępnij swoją talię w Internecie!
      </Styles.SecondaryText>
    </Styles.CopyLinkButtonContainer>
  );
};

export default CopyLinkButton;
