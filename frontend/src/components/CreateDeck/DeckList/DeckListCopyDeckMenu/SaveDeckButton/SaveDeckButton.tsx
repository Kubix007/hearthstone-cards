import * as Styles from "./SaveDeckButtonstyles";

const SaveDeckButton = () => {
  return (
    <Styles.CopyLinkButtonContainer>
      <Styles.PrimaryText>Zapisz talię</Styles.PrimaryText>
      <Styles.SecondaryText>
        Zachowaj swoją talię na później
      </Styles.SecondaryText>
    </Styles.CopyLinkButtonContainer>
  );
};

export default SaveDeckButton;
