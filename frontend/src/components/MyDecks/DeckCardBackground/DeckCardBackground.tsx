import { useSelector } from "react-redux";
import * as Styles from "./DeckCardBackground.styles";
import * as Types from "./DeckCardBackground.types";
import { RootState } from "../../../app/store";
import DeckCardArrowIcon from "./DeckCardArrowIcon";

const DeckCardBackground = ({ deck, $isclicked }: Types.IProps) => {
  let backgroundImg = "";
  let pageHeaderTitleText = "";
  const { metadata } = useSelector((state: RootState) => state.metadata);

  const getHeroInfo = () => {
    if (deck.hero!.hasOwnProperty("cardId")) {
      const heroDetails = metadata.classes.filter(
        (item) => item.cardId === deck.hero?.cardId
      );
      return heroDetails[0];
    } else {
      const heroDetails = metadata.classes.filter(
        (item) => item.cardId === deck.hero?.id
      );
      return heroDetails[0];
    }
  };

  switch (getHeroInfo().name) {
    case "":
      break;

    case "Wojownik":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_warrior-af1e7128db69a0453750626f90f68adb42f8f9013f10238c0c02fd90120fe1c27bb61aa31287c76e2610c974adce762c0e1d1b9620e8c3bc0736a5957c161e53.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Łowca demonów":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_demonhunter-74b078df0873e39c69ded4395fe044bec4a0509b7604781a93fba4ffa3de8c79c641e0168002428adef337e0a1038c1fa7862748d0c0dac90afaccea84cc1e99.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Łowca":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_hunter-e035017bdd8257893bca2b2950302847093ea25d85dc7ec29675e46f9c652a773c758dd8b6530b704b7ec1ddf22313595f2e1ba73a41bb2beb178892855673d2.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Łotr":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_rogue-79d0c64c2c3e61ae02dafda95936405677b80c3c29e038179a4726279df80e6179f55a10ac486447a379eb7f68299702c26774468ef93aee15179e6787a105a3.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Czarnoksiężnik":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_warlock-4b024793cdd1f65a9fad3febb1ae115cf4777d36a9305f8610c5b239568919303a76a8ecc3fbe9f3c96936991c6cea31b887577257a26db58c8b920bc96c6726.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Mag":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_mage-93b0dbc915e6bb762ea277033e0e2bde6e2b9d4c03af0834dd0190249584fccd3bbfc88665230f5d8276c704a2e04748bd7f1d82d989762d011423070cd95990.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Druid":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_druid-f0e01a45d1d78a898f5d8b2c1a5fc6a342c3c250c40fdca0df491e7518b1d7e513b329ff7d317ab87f7a18885edee4f29e94ff0cbccbcf9870c157401b04d79e.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Rycerz śmierci":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_deathknight-8e30c523b73236c572515c28e524f3b68ceacea5c223a58ca3b3ee5310170e15f2b7803b15dbf2f2dfba82da34a332fd014b5b08c306a499e74920cc69317ecc.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Kapłan":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_priest-d55e5c57179030e2d08128abe234b5db5729a2e9849d74d45b60fb8c31003606bbf9a79189b0ce9b50163cf7e6833a26a2a0f90b6575978c47acd86ffc27c451.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Szaman":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_shaman-01f75fe095213b0b89a38c2a77b563c81ca74bca48560039e023a05c88a6c44abaf1334cc78d6afd52f74241296156181a065e3b9f5dbcd8b9bfc57e113469b7.jpg";
      pageHeaderTitleText = `Talia: ${deck.class?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    case "Paladyn":
      backgroundImg =
        "https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_portrait_paladin-5f99cf232ff7735649b532948bea213ea92f1ae94de3b7a6589bc32ab1d2cc9274e3a393138e5b15cfb0607da506afd9ef6f7583586d4c819df5c40a2dbb62f1.jpg";
      pageHeaderTitleText = `Talia: ${deck.hero?.name} (${
        deck.format.charAt(0).toUpperCase() + deck.format.slice(1)
      })`;
      break;

    default:
      backgroundImg = "";
      pageHeaderTitleText = "";
      break;
  }

  return (
    <Styles.DeckCardBackground backgroundimg={backgroundImg}>
      <Styles.DetailsContainer>
        <Styles.DeckCardTitle>{deck.deckName}</Styles.DeckCardTitle>
        <Styles.DeckCardDetails>{pageHeaderTitleText}</Styles.DeckCardDetails>
        <Styles.DeckCardsAmount>{deck.cardCount}/30</Styles.DeckCardsAmount>
      </Styles.DetailsContainer>
      <DeckCardArrowIcon $isclicked={$isclicked} />
    </Styles.DeckCardBackground>
  );
};

export default DeckCardBackground;
