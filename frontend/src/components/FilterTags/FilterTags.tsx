import * as Styles from "./FilterTags.style";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ICardsState } from "../../shared/types";
import {
  changeClass,
  clearManaCost,
  changeTextFilter,
  changeAttack,
  changeHealth,
  changeTypeCard,
  changeMinionType,
  changeSpellSchool,
  changeRarity,
  changeKeyword,
} from "../../features/filter/filterSlice";
import FilterTagsButton from "./FIlterTagsButton";
import FilterTagsClearButton from "./FilterTagsClearButton";
import { useState } from "react";
import SortSelect from "./SortSelect";
import PaginationSelect from "./PaginationSelect";
import { Grid, ThemeProvider } from "@mui/material";
import * as Types from "./FilterTags.types";
import { BreakPointTheme } from "../../themes/Themes";

const FilterTags = ({ type }: Types.Props) => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const { cards }: ICardsState = useSelector((state: RootState) => state.cards);
  const [amountOfTags, setAmountOfTags] = useState(0);

  const clearManaContainer = () => {
    const manaCrystalElements = document.getElementsByClassName("manaCrystal");
    for (let i = 0; i < manaCrystalElements.length; i++) {
      manaCrystalElements[i].setAttribute(
        "class",
        `${manaCrystalElements[i].getAttribute("class")!}`
          .replace("selected-mana", "")
          .trimEnd()
      );
    }
  };

  return (
    <ThemeProvider theme={BreakPointTheme}>
      <Styles.FilterTagsContainer container direction="row" alignItems="center">
        <Styles.GridTagsContainer item>
          <Styles.TagsContainer>
            <Styles.FoundCardsContainer>
              <Styles.MainTag item>
                Znalezione karty dla parametru:
              </Styles.MainTag>
              <Styles.MainTag item>
                {/* GameMode TAG */}
                {`"${
                  filters.set.name ? filters.set.name : filters.gameMode.name
                }": ${cards.cardCount}`}
              </Styles.MainTag>
            </Styles.FoundCardsContainer>
            {/* Class TAG */}
            {type === "BROWSE" &&
            filters.class.name &&
            filters.class.name !== "Wszystkie klasy" ? (
              <FilterTagsButton
                filters={filters.class.name}
                dispatchAction={changeClass}
                initialValue={{ value: "", name: "Wszystkie klasy" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* Mana TAG */}
            {filters.manaCost.manaValue.length > 0 ? (
              <FilterTagsButton
                filters={`Mana: ${filters.manaCost.manaValue.join()}`}
                dispatchAction={clearManaCost}
                initialValue={{
                  name: "Mana: Dowolny",
                  value: "Mana: Dowolny",
                  manaValue: [],
                }}
                helpFunction={clearManaContainer}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* TextFilter TAG */}
            {filters.textFilter ? (
              <FilterTagsButton
                filters={filters.textFilter}
                dispatchAction={changeTextFilter}
                initialValue={""}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* ATTACK TAG */}
            {filters.attack.name && filters.attack.name !== "Atak" ? (
              <FilterTagsButton
                filters={filters.attack.name}
                dispatchAction={changeAttack}
                initialValue={{ value: "", name: "Atak" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* HEALTH TAG*/}
            {filters.health.name && filters.health.name !== "Zdrowie" ? (
              <FilterTagsButton
                filters={filters.health.name}
                dispatchAction={changeHealth}
                initialValue={{ value: "", name: "Zdrowie" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* TYPE CARD TAG */}
            {filters.type.name && filters.type.name !== "Rodzaj karty" ? (
              <FilterTagsButton
                filters={filters.type.name}
                dispatchAction={changeTypeCard}
                initialValue={{ value: "", name: "Rodzaj karty" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* MINION TYPE TAG */}
            {filters.minionType.name &&
            filters.minionType.name !== "Typ stronnika" ? (
              <FilterTagsButton
                filters={filters.minionType.name}
                dispatchAction={changeMinionType}
                initialValue={{ value: "", name: "Typ stronnika" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/*  SPELL SCHOOL TAG */}
            {filters.spellSchool.name &&
            filters.spellSchool.name !== "Szkoła zaklęć" ? (
              <FilterTagsButton
                filters={filters.spellSchool.name}
                dispatchAction={changeSpellSchool}
                initialValue={{ value: "", name: "Szkoła zaklęć" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/* RARITY TAG*/}
            {filters.rarity.name && filters.rarity.name !== "Rzadkość" ? (
              <FilterTagsButton
                filters={filters.rarity.name}
                dispatchAction={changeRarity}
                initialValue={{ value: "", name: "Rzadkość" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {/*  KEYWORD TAG */}
            {filters.keyword.name &&
            filters.keyword.name !== "Słowo kluczowe" ? (
              <FilterTagsButton
                filters={filters.keyword.name}
                dispatchAction={changeKeyword}
                initialValue={{ value: "", name: "Słowo kluczowe" }}
                setAmountOfTags={setAmountOfTags}
              />
            ) : null}
            {amountOfTags > 1 ? <FilterTagsClearButton /> : null}
          </Styles.TagsContainer>
        </Styles.GridTagsContainer>
        <Grid
          item
          sx={{
            [BreakPointTheme.breakpoints.down("bg")]: {
              display: "none",
            },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SortSelect />
          <PaginationSelect />
        </Grid>
      </Styles.FilterTagsContainer>
    </ThemeProvider>
  );
};

export default FilterTags;
