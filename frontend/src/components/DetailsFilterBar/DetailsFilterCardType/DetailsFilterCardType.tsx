import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterCardType.style";

const typeCard = [
  "Dowolny rodzaj karty",
  "Bohater",
  "Stronnik",
  "Zaklęcie",
  "Broń",
  "Lokalizacja",
];

const DetailsFilterCardType = () => {
  const [selectedTypeCard, setSelectedTypeCard] = useState(
    "Dowolny rodzaj karty"
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedTypeCard(event.target.value);
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedTypeCard}
        onChange={handleChange}
        input={<Styles.SelectInput />}
        MenuProps={{
          MenuListProps: {
            style: {
              background:
                "url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)",
            },
          },
        }}
      >
        {typeCard.map((item) => (
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterCardType;
