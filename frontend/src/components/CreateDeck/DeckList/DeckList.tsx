import * as Styles from "./DeckList.styles";

const DeckList = () => {
  return (
    <Styles.DeckListLayout>
      <Styles.DeckListTopBorder />
      <Styles.DeckListCenterBorder></Styles.DeckListCenterBorder>
      <Styles.DeckListBottomBorder></Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
