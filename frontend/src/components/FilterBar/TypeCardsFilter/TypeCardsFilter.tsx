import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./TypeCardsFilter.style";
import TypeCardImage from "./TypeCardImage";
import { AppDispatch } from "../../../app/store";
import { useDispatch } from "react-redux";
import { changeSet } from "../../../features/filter/filterSlice";

const typeCards = [
  { name: "Karty standardowe", type: "none", value: "standard" },
  { name: "Dzikie karty", type: "none", value: "wild" },
  { name: "Karty klasyczne", type: "none", value: "classic-cards" },
  { name: "Bieżące karty na Arenie", type: "none", value: "arena" },
  { name: "Bieżące karty w Starciach", type: "none", value: "duels" },
  { name: "Szlak Arthasa", type: "standardCards", value: "path-of-arthas" },
  {
    name: "Pochód Króla Lisza",
    type: "standardCards",
    value: "march-of-the-lich-king",
  },
  {
    name: "Morderstwo w twierdzy Nathria",
    type: "standardCards",
    value: "murder-at-castle-nathria",
  },
  {
    name: "Wyprawa do Zatopionego Miasta",
    type: "standardCards",
    value: "voyage-to-the-sunken-city",
  },
  {
    name: "Rozbici w Dolinie Alterak",
    type: "standardCards",
    value: "fractured-in-alterac-valley",
  },
  {
    name: "Zjednoczeni w Wichrogrodzie",
    type: "standardCards",
    value: "united-in-stormwind",
  },
  {
    name: "Zahartowani przez pustkowia",
    type: "standardCards",
    value: "forged-in-the-barrens",
  },
  { name: "Karty bazowe", type: "standardCards", value: "core" },
  {
    name: "Obłędny Festyn Lunomroku",
    type: "wildSets",
    value: "madness-at-the-darkmoon-faire",
  },
  { name: "Scholomancjum", type: "wildSets", value: "scholomance-academy" },
  {
    name: "Początkujący łowca demonów",
    type: "wildSets",
    value: "demonhunter-initiate",
  },
  { name: "Popioły Rubieży", type: "wildSets", value: "ashes-of-outland" },
  {
    name: "Przebudzenie Galakronda",
    type: "wildSets",
    value: "galakronds-awakening",
  },
  { name: "Wejście smoków", type: "wildSets", value: "descent-of-dragons" },
  { name: "Wybawcy Uldum", type: "wildSets", value: "saviors-of-uldum" },
  { name: "Wyjście z cienia", type: "wildSets", value: "rise-of-shadows" },
  { name: "Rozróba Rastakana", type: "wildSets", value: "rastakhans-rumble" },
  {
    name: "Projekt Hukatomba",
    type: "wildSets",
    value: "the-boomsday-project",
  },
  { name: "Wiedźmi Las", type: "wildSets", value: "the-witchwood" },
  {
    name: "Koboldy i katakumby",
    type: "wildSets",
    value: "kobolds-and-catacombs",
  },
  {
    name: "Rycerze Mroźnego Tronu",
    type: "wildSets",
    value: "knights-of-the-frozen-throne",
  },
  {
    name: "Podróż do wnętrza Un'Goro",
    type: "wildSets",
    value: "journey-to-ungoro",
  },
  {
    name: "Ciemne zaułki Gadżetonu",
    type: "wildSets",
    value: "mean-streets-of-gadgetzan",
  },
  {
    name: "Pewnej nocy w Karazhanie",
    type: "wildSets",
    value: "one-night-in-karazhan",
  },
  {
    name: "Przedwieczni Bogowie",
    type: "wildSets",
    value: "whispers-of-the-old-gods",
  },
  { name: "Liga odkrywców", type: "wildSets", value: "league-of-explorers" },
  { name: "Wielki Turniej", type: "wildSets", value: "the-grand-tournament" },
  { name: "Czarna Góra", type: "wildSets", value: "blackrock-mountain" },
  { name: "Gobliny vs Gnomy", type: "wildSets", value: "goblins-vs-gnomes" },
  { name: "Klątwa Naxxramas", type: "wildSets", value: "naxxramas" },
  { name: "Karty historyczne", type: "wildSets", value: "legacy" },
];

const TypeCardsFilter = () => {
  const dispatch: AppDispatch = useDispatch();
  const [typeCardName, setTypeCardName] = useState("standard");

  const handleChange = (event: SelectChangeEvent) => {
    setTypeCardName(event.target.value);
    dispatch(changeSet(event.target.value));
  };

  return (
    <Styles.TypeCardsFilterContainer>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo>
          <TypeCardImage
            svgImageName={typeCardName}
            width="33px"
            height="33px"
          />
        </Styles.LeftListLogo>
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={typeCardName}
        onChange={handleChange}
        input={<Styles.SelectInput />}
        MenuProps={{
          MenuListProps: {
            style: {
              maxWidth: 300,
              maxHeight: 400,
              background:
                "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
            },
          },
        }}
      >
        {typeCards
          .filter((item) => item.type === "none")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.value}>
              <Styles.TypeCardName variant="h6">
                {item.name}
              </Styles.TypeCardName>
            </Styles.SelectMenuItem>
          ))}
        <Styles.TypeCard>Karty standardowe</Styles.TypeCard>
        {typeCards
          .filter((item) => item.type === "standardCards")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.value}>
              <Styles.TypeCardName variant="h6">
                {item.name}
              </Styles.TypeCardName>
            </Styles.SelectMenuItem>
          ))}
        <Styles.TypeCard>Dzikie zestawy</Styles.TypeCard>
        {typeCards
          .filter((item) => item.type === "wildSets")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.value}>
              <Styles.TypeCardName variant="h6">
                {item.name}
              </Styles.TypeCardName>
            </Styles.SelectMenuItem>
          ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.TypeCardsFilterContainer>
  );
};

export default TypeCardsFilter;
