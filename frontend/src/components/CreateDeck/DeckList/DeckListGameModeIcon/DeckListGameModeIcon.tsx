import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import * as Styles from "./DeckListGameModeIcon.styles";

const DeckListGameModeIcon = () => {
  let icon = "";
  const { isSelected, deck } = useSelector(
    (state: RootState) => state.createDeck
  );

  if (isSelected) {
    switch (deck.format) {
      case "":
        break;

      case "Standard":
        icon =
          "https://images.blz-contentstack.com/v3/assets/bltc965041283bac56c/blt436c5e93bf8faf2c/64079268ad9e38554653fb6b/YotW_SetIcon_Colored.svg";
        break;

      case "Klasyczne":
        break;

      case "Dzicz":
        icon =
          "https://d2q63o9r0h0ohi.cloudfront.net/images/leaderboards/ButtonIcon_Wild-8dbfdeff15c2c80787743586bd8ab71cd7d770cc778fb47082340b7e89e723f08e22d844fa7794770dc1098503abf4519a01ccc835dc8da39f93b908b5e471f4.png";
        break;

      default:
        icon = "";
        break;
    }
  }

  return <Styles.GameModeIcon image={icon} />;
};

export default DeckListGameModeIcon;
