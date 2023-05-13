import * as Styles from "./DialogCardPreview.styles";
import * as Types from "./DialogCardPreview.types";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import parse from "html-react-parser";
import { useDispatch } from "react-redux";
import {
  setSelectedCard,
  setSelectedIndex,
} from "../../../../features/selectedCard/selectedCardSlice";

const DialogCardPreview = ({ card, isBrowseType }: Types.Props) => {
  const { metadata } = useSelector((state: RootState) => state.metadata);
  const { cards } = useSelector((state: RootState) => state.cards);
  const dispatch: AppDispatch = useDispatch();
  const { selectedIndex } = useSelector(
    (state: RootState) => state.selectedCard
  );
  const cardInfo = {
    type: metadata.types
      .filter((type) => type.id === card.cardTypeId)
      .map((type) => type.name),
    minionType: metadata.minionTypes
      .filter((type) => type.id === card.minionTypeId)
      .map((type) => type.name),
    rarity: metadata.rarities
      .filter((rarity) => rarity.id === card.rarityId)
      .map((rarity) => rarity.name),
    set: metadata.sets
      .filter((set) => set.id === card.cardSetId)
      .map((set) => set.name),
    class: metadata.classes
      .filter((className) => className.id === card.classId)
      .map((className) => className.name),
    craftingCost: metadata.rarities
      .filter((rarity) => rarity.id === card.rarityId)
      .map(
        (rarity) =>
          `${rarity.craftingCost[0]} / ${rarity.craftingCost[1]} (Złota)`
      ),
    dustValue: metadata.rarities
      .filter((rarity) => rarity.id === card.rarityId)
      .map(
        (rarity) => `${rarity.dustValue[0]} / ${rarity.dustValue[1]} (Złota)`
      ),
  };

  const handleChangeCard = (type: string) => {
    if (type === "left") {
      let index = selectedIndex;
      index--;
      dispatch(setSelectedCard(cards.cards[index]));
      dispatch(setSelectedIndex(index));
    } else if (type === "right") {
      let index = selectedIndex;
      index++;
      dispatch(setSelectedCard(cards.cards[index]));
      dispatch(setSelectedIndex(index));
    }
  };

  return (
    <Grid
      container
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      {isBrowseType ? (
        <Grid item>
          <Styles.LeftArrowButton
            active={selectedIndex !== 0}
            onClick={() => handleChangeCard("left")}
          />
        </Grid>
      ) : null}
      <Grid item>
        <Styles.Cover src={card.image} alt={card.name} />
      </Grid>
      <Grid item>
        <Styles.CardName>{card.name}</Styles.CardName>
        <Styles.AdditionalText>{parse(card.flavorText)}</Styles.AdditionalText>
        <Styles.Keywords>{parse(card.text)}</Styles.Keywords>
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
            <Styles.ItemValue>{card.artistName}</Styles.ItemValue>
          </Styles.Li>
        </Styles.Ul>
      </Grid>
      {isBrowseType ? (
        <Grid item>
          <Styles.RightArrowButton
            active={selectedIndex < cards.cards.length - 1}
            onClick={() => handleChangeCard("right")}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default DialogCardPreview;
