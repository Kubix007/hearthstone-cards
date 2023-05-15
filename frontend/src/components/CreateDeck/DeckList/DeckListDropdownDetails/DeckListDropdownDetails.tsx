import * as Styles from "./DeckListDropdownDetails.styles";
import DeckDetailsGameModeButton from "./DeckDetailsGameModeButton";
import DeckDetailsHeroPower from "./DeckDetailsHeroPower";
import DeckDetailsHeroPowerDetails from "./DeckDetailsHeroPowerDetails";
import DeckDetailsManaCosts from "./DeckDetailsManaCosts";

const DeckListDropdownDetails = () => {
  return (
    <Styles.DeckListDropdownDetails>
      <DeckDetailsGameModeButton />
      <DeckDetailsHeroPower />
      <DeckDetailsHeroPowerDetails />
      <DeckDetailsManaCosts />
    </Styles.DeckListDropdownDetails>
  );
};

export default DeckListDropdownDetails;
