import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./TypeCardsFilter.style";
import TypeCardImage from "../TypeCardImage";

const typeCards = [
  { name: "Karty standardowe", type: "none" },
  { name: "Dzikie karty", type: "none" },
  { name: "Karty klasyczne", type: "none" },
  { name: "Bieżące karty na Arenie", type: "none" },
  { name: "Bieżące karty w Starciach", type: "none" },
  { name: "Szlak Arthasa", type: "standardCards" },
  { name: "Pochód Króla Lisza", type: "standardCards" },
  { name: "Morderstwo w twierdzy Nathria", type: "standardCards" },
  { name: "Wyprawa do Zatopionego Miasta", type: "standardCards" },
  { name: "Rozbici w Dolinie Alterak", type: "standardCards" },
  { name: "Zjednoczeni w Wichrogrodzie", type: "standardCards" },
  { name: "Zahartowani przez pustkowia", type: "standardCards" },
  { name: "Karty bazowe", type: "standardCards" },
  { name: "Obłędny Festyn Lunomroku", type: "wildSets" },
  { name: "Scholomancjum", type: "wildSets" },
  { name: "Początkujący łowca demonów", type: "wildSets" },
  { name: "Popioły Rubieży", type: "wildSets" },
  { name: "Przebudzenie Galakronda", type: "wildSets" },
  { name: "Wejście smoków", type: "wildSets" },
  { name: "Wybawcy Uldum", type: "wildSets" },
  { name: "Wyjście z cienia", type: "wildSets" },
  { name: "Rozróba Rastakana", type: "wildSets" },
  { name: "Projekt Hukatomba", type: "wildSets" },
  { name: "Wiedźmi Las", type: "wildSets" },
  { name: "Koboldy i katakumby", type: "wildSets" },
  { name: "Rycerze Mroźnego Tronu", type: "wildSets" },
  { name: "Podróż do wnętrza Un'Goro", type: "wildSets" },
  { name: "Ciemne zaułki Gadżetonu", type: "wildSets" },
  { name: "Pewnej nocy w Karazhanie", type: "wildSets" },
  { name: "Przedwieczni Bogowie", type: "wildSets" },
  { name: "Liga odkrywców", type: "wildSets" },
  { name: "Wielki Turniej", type: "wildSets" },
  { name: "Czarna Góra", type: "wildSets" },
  { name: "Gobliny vs Gnomy", type: "wildSets" },
  { name: "Klątwa Naxxramas", type: "wildSets" },
  { name: "Karty historyczne", type: "wildSets" },
];

const TypeCardsFilter = () => {
  const [typeCardName, setTypeCardName] = useState("Karty standardowe");

  const handleChange = (event: SelectChangeEvent) => {
    setTypeCardName(event.target.value);
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
              height: 400,
              background:
                "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
            },
          },
        }}
      >
        {typeCards
          .filter((item) => item.type === "none")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.name}>
              <Styles.TypeCardName variant="h6">
                {item.name}
              </Styles.TypeCardName>
            </Styles.SelectMenuItem>
          ))}
        <Styles.TypeCard>Karty standardowe</Styles.TypeCard>
        {typeCards
          .filter((item) => item.type === "standardCards")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.name}>
              <Styles.TypeCardName variant="h6">
                {item.name}
              </Styles.TypeCardName>
            </Styles.SelectMenuItem>
          ))}
        <Styles.TypeCard>Dzikie zestawy</Styles.TypeCard>
        {typeCards
          .filter((item) => item.type === "wildSets")
          .map((item) => (
            <Styles.SelectMenuItem key={item.name} value={item.name}>
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
