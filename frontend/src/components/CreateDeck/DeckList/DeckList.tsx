import * as Styles from "./DeckList.styles";
import DeckListClassBackground from "./DeckListClassBackground";

const DeckList = () => {
  return (
    <Styles.DeckListLayout>
      <Styles.DeckListTopBorder>
        <Styles.DeckTitleContainer>
          <Styles.DeckTitleBorder>
            <DeckListClassBackground />
          </Styles.DeckTitleBorder>
        </Styles.DeckTitleContainer>
      </Styles.DeckListTopBorder>
      <Styles.DeckListCenterBorder></Styles.DeckListCenterBorder>
      <Styles.DeckListBottomBorder></Styles.DeckListBottomBorder>
    </Styles.DeckListLayout>
  );
};

export default DeckList;
