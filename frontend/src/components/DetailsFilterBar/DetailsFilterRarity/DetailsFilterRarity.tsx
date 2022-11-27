import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterRarity.style";

const rarity = [
  "Dowolna rzadkość",
  "Zwykła",
  "Za darmo",
  "Rzadko",
  "Epicka",
  "Legendarna",
];

const DetailsFilterRarity = () => {
  const [selectedRarity, setSelectedRarity] = useState("Dowolna rzadkość");

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRarity(event.target.value);
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedRarity}
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
        {rarity.map((item) => (
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterRarity;
