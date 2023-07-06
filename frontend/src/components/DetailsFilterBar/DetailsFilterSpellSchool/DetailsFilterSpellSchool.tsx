import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeSpellSchool } from "../../../features/filter/filterSlice";
import * as Styles from "./DetailsFilterSpellSchool.style";

const spellSchools = [
  { name: "Szkoła zaklęć", value: "Szkoła zaklęć" },
  { name: "Moc tajemna", value: "arcane" },
  { name: "Ogień", value: "fire" },
  { name: "Lód", value: "frost" },
  { name: "Natura", value: "nature" },
  { name: "Świętość", value: "holy" },
  { name: "Cień", value: "shadow" },
  { name: "Spaczenie", value: "fel" },
];

const DetailsFilterSpellSchool = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedSpellSchool, setSelectedSpellSchool] =
    useState("Szkoła zaklęć");

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = spellSchools.filter((x) => x.value === value);
    setSelectedSpellSchool(value);
    if (value === "Szkoła zaklęć") {
      value = "";
    }
    dispatch(changeSpellSchool({ name: targetName[0].name, value }));
  };

  useEffect(() => {
    if (filters.spellSchool.value === "") {
      setSelectedSpellSchool("Szkoła zaklęć");
    }
  }, [filters.spellSchool]);

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
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterSpellSchool;
