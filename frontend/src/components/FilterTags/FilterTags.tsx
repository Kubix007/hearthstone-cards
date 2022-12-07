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

const FilterTags = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const { cards }: ICardsState = useSelector((state: RootState) => state.cards);
  const [amountOfTags, setAmountOfTags] = useState(0);

  const clearManaContainer = () => {
    const manaCrystalElements = document.getElementsByClassName("manaCrystal");
    for (let i = 0; i < manaCrystalElements.length; i++) {
      manaCrystalElements[i].setAttribute(
        "class",
        `${manaCrystalElements[i].getAttribute("class")!}`
          .replace("selected", "")
          .trimEnd()
      );
    }
  };

  return (
    <Styles.FilterTagsContainer
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Styles.TagsContainer>
        <Styles.MainTag item>Znalezione karty dla parametru:</Styles.MainTag>
        <Styles.MainTag item>
          {/* GameMode TAG */}
          {`"${filters.set.name ? filters.set.name : filters.gameMode.name}": ${
            cards.cardCount
          }`}
        </Styles.MainTag>
        {/* Class TAG */}
        {filters.class.name && filters.class.name !== "Wszystkie klasy" ? (
          <FilterTagsButton
            filters={filters.class.name}
            dispatchAction={changeClass}
            initialValue={{ value: "", name: "Wszystkie klasy" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/* Mana TAG */}
        {filters.manaCost.length > 0 ? (
          <FilterTagsButton
            filters={`Mana: ${filters.manaCost.join()}`}
            dispatchAction={clearManaCost}
            initialValue={[]}
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
        {filters.attack.name && filters.attack.name !== "Dowolny atak" ? (
          <FilterTagsButton
            filters={filters.attack.name}
            dispatchAction={changeAttack}
            initialValue={{ value: "", name: "Dowolny atak" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/* HEALTH TAG*/}
        {filters.health.name && filters.health.name !== "Dowolne zdrowie" ? (
          <FilterTagsButton
            filters={filters.health.name}
            dispatchAction={changeHealth}
            initialValue={{ value: "", name: "Dowolne zdrowie" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/* TYPE CARD TAG */}
        {filters.type.name && filters.type.name !== "Dowolny rodzaj karty" ? (
          <FilterTagsButton
            filters={filters.type.name}
            dispatchAction={changeTypeCard}
            initialValue={{ value: "", name: "Dowolny rodzaj karty" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/* MINION TYPE TAG */}
        {filters.minionType.name &&
        filters.minionType.name !== "Dowolny typ stronnika" ? (
          <FilterTagsButton
            filters={filters.minionType.name}
            dispatchAction={changeMinionType}
            initialValue={{ value: "", name: "Dowolny typ stronnika" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/*  SPELL SCHOOL TAG */}
        {filters.spellSchool.name &&
        filters.spellSchool.name !== "Dowolna szkoła zaklęć" ? (
          <FilterTagsButton
            filters={filters.spellSchool.name}
            dispatchAction={changeSpellSchool}
            initialValue={{ value: "", name: "Dowolna szkoła zaklęć" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/* RARITY TAG*/}
        {filters.rarity.name && filters.rarity.name !== "Dowolna rzadkość" ? (
          <FilterTagsButton
            filters={filters.rarity.name}
            dispatchAction={changeRarity}
            initialValue={{ value: "", name: "Dowolna rzadkość" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {/*  KEYWORD TAG */}
        {filters.keyword.name &&
        filters.keyword.name !== "Dowolne słowo kluczowe" ? (
          <FilterTagsButton
            filters={filters.keyword.name}
            dispatchAction={changeKeyword}
            initialValue={{ value: "", name: "Dowolne słowo kluczowe" }}
            setAmountOfTags={setAmountOfTags}
          />
        ) : null}
        {amountOfTags > 1 ? <FilterTagsClearButton /> : null}
      </Styles.TagsContainer>
      <SortSelect />
    </Styles.FilterTagsContainer>
  );
};

export default FilterTags;
