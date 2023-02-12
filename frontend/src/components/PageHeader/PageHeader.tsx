import * as Styles from "./PageHeader.styles";
import { useLocation } from "react-router-dom";

const PageHeader = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  let backgroundImg = "";
  let pageHeaderTitleText = "";
  let pageHeaderDescriptionText = "";

  switch (location) {
    case "createdeck":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder-8ba8a0a22ee3b9d9c86ff43850a48b4091c81d0cd101498391e1b5989bdd0f44015affb4578987bc9f9f788e0f01ec46d1db28667e716b721a6e3f84cbe84bf3.jpg";
      pageHeaderTitleText = "Interfejs tworzenia talii";
      pageHeaderDescriptionText =
        "Importuj kod talii lub wybierz bohatera, aby rozpocząć";

      break;

    case "browsecards":
      backgroundImg =
        "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt42705147f327ad2d/5e46fcb1cc8de70b69efa92d/bg_cardgallery_header_standard.jpg?format=webp";
      pageHeaderTitleText = "Biblioteka kart";
      pageHeaderDescriptionText = "Przeglądaj wszystkie dostępne karty w grze";
      break;

    default:
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder-8ba8a0a22ee3b9d9c86ff43850a48b4091c81d0cd101498391e1b5989bdd0f44015affb4578987bc9f9f788e0f01ec46d1db28667e716b721a6e3f84cbe84bf3.jpg";
      break;
  }

  return (
    <Styles.PageHeaderContainer
      backgroundimg={backgroundImg}
      xs={false}
      sm={4}
      md={7}
    >
      <Styles.TextContainer>
        <Styles.PageHeaderTitleText>
          {pageHeaderTitleText}
        </Styles.PageHeaderTitleText>
        <Styles.PageHeaderDescriptionText>
          {pageHeaderDescriptionText}
        </Styles.PageHeaderDescriptionText>
      </Styles.TextContainer>
    </Styles.PageHeaderContainer>
  );
};

export default PageHeader;
