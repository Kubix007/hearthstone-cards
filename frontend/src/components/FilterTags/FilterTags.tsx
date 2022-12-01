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

const FilterTags = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const { cards }: ICardsState = useSelector((state: RootState) => state.cards);

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
      justifyContent="flex-start"
      alignItems="baseline"
    >
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
        />
      ) : null}
      {/* Mana TAG */}
      {filters.manaCost.length > 0 ? (
        <FilterTagsButton
          filters={`Mana: ${filters.manaCost.join()}`}
          dispatchAction={clearManaCost}
          initialValue={[]}
          helpFunction={clearManaContainer}
        />
      ) : null}
      {/* TextFilter TAG */}
      {filters.textFilter ? (
        <FilterTagsButton
          filters={filters.textFilter}
          dispatchAction={changeTextFilter}
          initialValue={""}
        />
      ) : null}
      {/* TextFilter ATTACK */}
      {filters.attack.name && filters.attack.name !== "Dowolny atak" ? (
        <FilterTagsButton
          filters={filters.attack.name}
          dispatchAction={changeAttack}
          initialValue={{ value: "", name: "Dowolny atak" }}
        />
      ) : null}
      {/* TextFilter HEALTH */}
      {filters.health.name && filters.health.name !== "Dowolne zdrowie" ? (
        <FilterTagsButton
          filters={filters.health.name}
          dispatchAction={changeHealth}
          initialValue={{ value: "", name: "Dowolne zdrowie" }}
        />
      ) : null}
      {/* TextFilter TYPE CARD */}
      {filters.type.name && filters.type.name !== "Dowolny rodzaj karty" ? (
        <FilterTagsButton
          filters={filters.type.name}
          dispatchAction={changeTypeCard}
          initialValue={{ value: "", name: "Dowolny rodzaj karty" }}
        />
      ) : null}
      {/* TextFilter MINION TYPE */}

      {filters.minionType.name &&
      filters.minionType.name !== "Dowolny typ stronnika" ? (
        <FilterTagsButton
          filters={filters.minionType.name}
          dispatchAction={changeMinionType}
          initialValue={{ value: "", name: "Dowolny typ stronnika" }}
        />
      ) : null}
      {/* TextFilter SPELL SCHOOL */}
      {filters.spellSchool.name &&
      filters.spellSchool.name !== "Dowolna szkoła zaklęć" ? (
        <FilterTagsButton
          filters={filters.spellSchool.name}
          dispatchAction={changeSpellSchool}
          initialValue={{ value: "", name: "Dowolna szkoła zaklęć" }}
        />
      ) : null}
      {/* TextFilter RARITY */}

      {filters.rarity.name && filters.rarity.name !== "Dowolna rzadkość" ? (
        <FilterTagsButton
          filters={filters.rarity.name}
          dispatchAction={changeRarity}
          initialValue={{ value: "", name: "Dowolna rzadkość" }}
        />
      ) : null}
      {/* TextFilter KEYWORD */}
      {filters.keyword.name &&
      filters.keyword.name !== "Dowolne słowo kluczowe" ? (
        <FilterTagsButton
          filters={filters.keyword.name}
          dispatchAction={changeKeyword}
          initialValue={{ value: "", name: "Dowolne słowo kluczowe" }}
        />
      ) : null}
    </Styles.FilterTagsContainer>
  );
};

export default FilterTags;
