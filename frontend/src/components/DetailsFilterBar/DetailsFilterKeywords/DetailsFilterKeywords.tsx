import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeKeyword } from "../../../features/filter/filterSlice";
import * as Styles from "./DetailsFilterKeywords.style";

const keywords = [
  { name: "Dowolne słowo kluczowe", value: "Dowolne słowo kluczowe" },
  { name: "Adaptuj", value: "adapt" },
  { name: "Agonia", value: "deathrattle" },
  { name: "Boska tarcza", value: "divine-shield" },
  { name: "Części zamienne", value: "spare-part" },
  { name: "Dwuczar", value: "twinspell" },
  { name: "Echo", value: "echo" },
  { name: "Erupcja magii", value: "spellburst" },
  { name: "Furia wichru", value: "windfury" },
  { name: "Honorowe zabójstwo", value: "honorablekill" },
  { name: "Inspiracja", value: "inspire" },
  { name: "Inwokuj", value: "empower" },
  { name: "Kolos +X", value: "colossal" },
  { name: "Kombinacja", value: "combo" },
  { name: "Kontra", value: "counter" },
  { name: "Kradzież życia", value: "lifesteal" },
  { name: "Magnetyzm", value: "modular" },
  { name: "Manomania (X)", value: "manathirst" },
  { name: "Megafuria wichru", value: "mega-windfury" },
  { name: "Nasyć", value: "infuse" },
  { name: "Niewrażliwość", value: "immune" },
  { name: "Obłęd", value: "frenzy" },
  { name: "Obrażenia zaklęć", value: "spellpower" },
  { name: "Obrażenia zaklęć Natury", value: "spellpowernature" },
  { name: "Odkryj", value: "discover" },
  { name: "Odrodzenie", value: "reborn" },
  { name: "Okrzyk bojowy", value: "battlecry" },
  { name: "Początek gry", value: "startofgamekeyword" },
  { name: "Prowokacja", value: "taunt" },
  { name: "Przeciążenie", value: "overload" },
  { name: "Rekrutuj", value: "recruit" },
  { name: "Rzeź", value: "overkill" },
  { name: "Sekret", value: "secret" },
  { name: "Seria zadań", value: "questline" },
  { name: "Sługus", value: "evilzug" },
  { name: "Splugawienie", value: "corrupt" },
  { name: "Szarża", value: "charge" },
  { name: "Trucizna", value: "poisonous" },
  { name: "Trup", value: "corpse" },
  { name: "Ukrycie", value: "stealth" },
  { name: "Wyciszenie", value: "silence" },
  { name: "Wyłów kartę", value: "dredge" },
  { name: "Wymiana", value: "trade" },
  { name: "Wyrzutek", value: "outcast" },
  { name: "Zadanie", value: "quest" },
  { name: "Zadanie poboczne", value: "sidequest" },
  { name: "Zamrożenie", value: "freeze" },
  { name: "Zryw", value: "rush" },
];

const DetailsFilterKeywords = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedKeyword, setSelectedKeyword] = useState(
    "Dowolne słowo kluczowe"
  );

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = keywords.filter((x) => x.value === value);
    setSelectedKeyword(value);
    if (value === "Dowolne słowo kluczowe") {
      value = "";
    }
    dispatch(changeKeyword({ name: targetName[0].name, value }));
  };

  useEffect(() => {
    if (filters.keyword.value === "") {
      setSelectedKeyword("Dowolne słowo kluczowe");
    }
  }, [filters.keyword]);

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedKeyword}
        onChange={handleChange}
        input={<Styles.SelectInput />}
        MenuProps={{
          MenuListProps: {
            style: {
              maxHeight: 400,
              background:
                "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
            },
          },
        }}
      >
        {keywords.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterKeywords;
