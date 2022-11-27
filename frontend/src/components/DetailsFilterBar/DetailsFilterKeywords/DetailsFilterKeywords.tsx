import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterKeywords.style";

const keywords = [
  "Dowolne słowo kluczowe",
  "Adaptuj",
  "Agonia",
  "Boska tarcza",
  "Części zamienne",
  "Dwuczar",
  "Echo",
  "Erupcja magii",
  "Furia wichru",
  "Honorowe zabójstwo",
  "Inspiracja",
  "Inwokuj",
  "Kolos +X",
  "Kombinacja",
  "Kontra",
  "Kradzież życia",
  "Magnetyzm",
  "Manomania (X)",
  "Megafuria wichru",
  "Nasyć",
  "Niewrażliwość",
  "Obłęd",
  "Obrażenia zaklęć",
  "Obrażenia zaklęć Natury",
  "Odkryj",
  "Odrodzenie",
  "Okrzyk bojowy",
  "Początek gry",
  "Prowokacja",
  "Przeciążenie",
  "Rekrutuj",
  "Rzeź",
  "Sekret",
  "Seria zadań",
  "Sługus",
  "Splugawienie",
  "Szarża",
  "Trucizna",
  "Trup",
  "Ukrycie",
  "Wyciszenie",
  "Wyłów kartę",
  "Wymiana",
  "Wyrzutek",
  "Zadanie",
  "Zadanie poboczne",
  "Zamrożenie",
  "Zryw",
];

const DetailsFilterKeywords = () => {
  const [selectedKeyword, setSelectedKeyword] = useState(
    "Dowolne słowo kluczowe"
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedKeyword(event.target.value);
  };

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
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterKeywords;
