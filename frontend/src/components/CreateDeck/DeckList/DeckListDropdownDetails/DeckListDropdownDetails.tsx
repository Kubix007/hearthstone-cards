import * as Styles from "./DeckListDropdownDetails.styles";
import DeckDetailsGameModeButton from "./DeckDetailsGameModeButton";
import DeckDetailsHeroPower from "./DeckDetailsHeroPower";

const DeckListDropdownDetails = () => {
  return (
    <Styles.DeckListDropdownDetails>
      <DeckDetailsGameModeButton />
      <DeckDetailsHeroPower />
    </Styles.DeckListDropdownDetails>
  );
};

export default DeckListDropdownDetails;
