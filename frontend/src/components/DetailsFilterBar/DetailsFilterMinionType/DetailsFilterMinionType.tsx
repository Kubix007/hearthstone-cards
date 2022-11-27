import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterMinionType.style";

const minionType = [
  "Dowolny typ stronnika",
  "Bestia",
  "Demon",
  "Kolcozwierz",
  "Mech",
  "Murlok",
  "Naga",
  "Nieumarły",
  "Pirat",
  "Smok",
];

const DetailsFilterMinionType = () => {
  const [selectedMinionType, setSelectedMinionType] = useState(
    "Dowolny typ stronnika"
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedMinionType(event.target.value);
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedMinionType}
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
        {minionType.map((item) => (
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterMinionType;
