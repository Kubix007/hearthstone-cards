import * as Styles from "./DialogCardPreview.styles";
import * as Types from "./DialogCardPreview.types";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import parse from "html-react-parser";

const DialogCardPreview = ({ cards }: Types.Props) => {
  const { metadata } = useSelector((state: RootState) => state.metadata);

  const cardInfo = {
    type: metadata.types
      .filter((type) => type.id === cards.cardTypeId)
      .map((type) => type.name),
    minionType: metadata.minionTypes
      .filter((type) => type.id === cards.minionTypeId)
      .map((type) => type.name),
    rarity: metadata.rarities
      .filter((rarity) => rarity.id === cards.rarityId)
      .map((rarity) => rarity.name),
    set: metadata.sets
      .filter((set) => set.id === cards.cardSetId)
      .map((set) => set.name),
    class: metadata.classes
      .filter((className) => className.id === cards.classId)
      .map((className) => className.name),
    craftingCost: metadata.rarities
      .filter((rarity) => rarity.id === cards.rarityId)
      .map(
        (rarity) =>
          `${rarity.craftingCost[0]} / ${rarity.craftingCost[1]} (Złota)`
      ),
    dustValue: metadata.rarities
      .filter((rarity) => rarity.id === cards.rarityId)
      .map(
        (rarity) => `${rarity.dustValue[0]} / ${rarity.dustValue[1]} (Złota)`
      ),
  };

  return (
    <Grid
      container
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Styles.Cover src={cards.image} alt={cards.name} />
      </Grid>
      <Grid item>
        <Styles.CardName>{cards.name}</Styles.CardName>
        <Styles.AdditionalText>{parse(cards.flavorText)}</Styles.AdditionalText>
        <Styles.Keywords>{parse(cards.text)}</Styles.Keywords>
        <Styles.Ul>
          <Styles.Li>
            <Styles.ItemName>Rodzaj:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.type}</Styles.ItemValue>
          </Styles.Li>
          {cardInfo.minionType.length > 0 ? (
            <Styles.Li>
              <Styles.ItemName>Typ stronnika:</Styles.ItemName>
              <Styles.ItemValue>{cardInfo.minionType}</Styles.ItemValue>
            </Styles.Li>
          ) : null}
          <Styles.Li>
            <Styles.ItemName>Rzadkość:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.rarity}</Styles.ItemValue>
          </Styles.Li>
          <Styles.Li>
            <Styles.ItemName>Zestaw:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.set}</Styles.ItemValue>
          </Styles.Li>
          <Styles.Li>
            <Styles.ItemName>Klasa:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.class}</Styles.ItemValue>
          </Styles.Li>
          <Styles.Li>
            <Styles.ItemName>Koszt stworzenia:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.craftingCost}</Styles.ItemValue>
          </Styles.Li>
          <Styles.Li>
            <Styles.ItemName>Zysk za odczarowanie:</Styles.ItemName>
            <Styles.ItemValue>{cardInfo.dustValue}</Styles.ItemValue>
          </Styles.Li>
          <Styles.Li>
            <Styles.ItemName>Grafik:</Styles.ItemName>
            <Styles.ItemValue>{cards.artistName}</Styles.ItemValue>
          </Styles.Li>
        </Styles.Ul>
      </Grid>
    </Grid>
  );
};

export default DialogCardPreview;
