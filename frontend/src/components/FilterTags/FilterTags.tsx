import * as Styles from "./FilterTags.style";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ICardsState } from "../../shared/types";
import {
  changeClass,
  clearManaCost,
  changeTextFilter,
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
    </Styles.FilterTagsContainer>
  );
};

export default FilterTags;
