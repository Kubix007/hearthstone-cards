import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterSpellSchool.style";

const spellSchools = [
  "Dowolna szkoła zaklęć",
  "Moc tajemna",
  "Ogień",
  "Lód",
  "Natura",
  "Świętość",
  "Cień",
  "Spaczenie",
];

const DetailsFilterSpellSchool = () => {
  const [selectedSpellSchool, setSelectedSpellSchool] = useState(
    "Dowolna szkoła zaklęć"
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSpellSchool(event.target.value);
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedSpellSchool}
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
        {spellSchools.map((item) => (
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterSpellSchool;
