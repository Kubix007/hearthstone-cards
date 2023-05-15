import { useSelector } from "react-redux";
import * as Styles from "./DeckDetailsHeroPowerDetails.styles";
import { RootState } from "../../../../../app/store";

const DeckDetailsHeroPowerDetails = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const htmlTagsRegex = /(<([^>]+)>)/gi;
  return (
    <Styles.Container>
      <Styles.Title>Moc specjalna</Styles.Title>
      <Styles.HeroPowerName>{deck.heroPower?.name}</Styles.HeroPowerName>
      <Styles.HeroPowerDescription>
        {deck.heroPower?.text.replace(htmlTagsRegex, "")}
      </Styles.HeroPowerDescription>
    </Styles.Container>
  );
};

export default DeckDetailsHeroPowerDetails;
