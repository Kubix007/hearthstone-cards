import * as Styles from "./PageHeader.styles";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const PageHeader = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  let backgroundImg = "";
  let pageHeaderTitleText = "";
  let pageHeaderDescriptionText = "";

  const { isSelected, selectedClass } = useSelector(
    (state: RootState) => state.createDeck
  );

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

  //Talia: Druid (Standard)

  if (isSelected) {
    switch (selectedClass.name) {
      case "":
        break;

      case "Wojownik":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_warrior-a1c677bce66da4febc6063385185b4cca5b489218b8e37ffa34def8e6737ca94d03f550de13a9db1aec30397bc8e4f0b4a28ea85383affcd49fb6e79d1feb4d5.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Łowca demonów":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_demonhunter-7d8a39dd2419bb873d9989892a8837928f7a32411f4588bea85e9221d78a4faba8c8b568c76ef09081c74b032eb040c22356c49e9eafd548bf222dcf666072e5.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Łowca":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_hunter-12f2c8706d34b11cfba0e09983205e22e326ac6b5b2acb16795f050fb1105152312683dfef4cea6cb988637d4d697e818b2a74360ced5c396be9343bcd960f40.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Łotr":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_rogue-7ac981bc89b95a4d84d595f08de1a44c44f82daef22d831966002d9034fcb5a0767ca03be871583bf2fc5ce2085db1421895a728ff7057b3458f177e1367a07a.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Czarnoksiężnik":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_warlock-3de0716ff312bacec95f231f5585d5ad6877da997386523ed63faa4ae1a5e97eab1c59d5acf0f740be678287b20d20dfdd1b3914f9e9dee7974538f2d16bf49d.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Mag":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_mage-2b0061ba1c51e6cefa18fbe4191e8676efcbff742a3f8aeb680cbf0ad5cee3a5bee344c76293a32679813ccf4e59ce4b48c5ed16950b7bbfff0a56ed337249ef.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Druid":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_druid-18dfc73daeeb5d2ce75480c8fad9210ad99d2521e2f9f1234991203bebfa72dbcbb86876c9b890edc02bc23233754ece07cb41f68c839a12891680778e9d0881.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Rycerz śmierci":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_deathknight-2c5a687406db0477b730c14aa5c7988927ade58bc9f6693098023fba1922280c4cbd926288e64c6b7ab6843d37c8bcde545d2d1e5437fd2e8fb5376c30e5f714.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Kapłan":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_priest-ed1feb486c8f753b7a2ce7351f790feb910bfdbaeb2d07e3f5c446d436b02bcdae0bae60643f233e38c689b59d28128c97bb7d840a50ac5c7c7f3a42831abba1.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Szaman":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_shaman-2dacd1bab49d9060501c2362f09841130565fba8719695b3245e77b1eea05e4ab47f4d5e62ab1c481b62b9cf9cfba3d0f216a355fe24311e74ea89cd625ab7ab.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      case "Paladyn":
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder_paladin-2313904de00385ea44b16af67986bb96a3c292ec2ef296830fba3dc82313b50875f73ad5bb66689e56e0364f99c38ee6d106d46da29f455dc7301d9d1de4aba9.jpg";
        pageHeaderTitleText = `Talia: ${selectedClass.name} (${selectedClass.gameMode})`;
        pageHeaderDescriptionText = "";
        break;

      default:
        backgroundImg =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_top_deckbuilder-8ba8a0a22ee3b9d9c86ff43850a48b4091c81d0cd101498391e1b5989bdd0f44015affb4578987bc9f9f788e0f01ec46d1db28667e716b721a6e3f84cbe84bf3.jpg";
        pageHeaderTitleText = "Interfejs tworzenia talii";
        pageHeaderDescriptionText =
          "Importuj kod talii lub wybierz bohatera, aby rozpocząć";
        break;
    }
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
