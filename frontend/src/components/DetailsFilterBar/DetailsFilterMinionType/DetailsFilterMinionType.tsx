import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import * as Styles from "./DetailsFilterMinionType.style";
import { changeMinionType } from "../../../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";

const minionType = [
  { name: "Dowolny typ stronnika", value: "Dowolny typ stronnika" },
  { name: "Bestia", value: "beast" },
  { name: "Demon", value: "demon" },
  { name: "Kolcozwierz", value: "quilboar" },
  { name: "Mech", value: "mech" },
  { name: "Murlok", value: "murloc" },
  { name: "Naga", value: "naga" },
  { name: "Nieumarły", value: "undead" },
  { name: "Pirat", value: "pirate" },
  { name: "Smok", value: "dragon" },
  { name: "Totem", value: "totem" },
  { name: "Wszystkie", value: "all" },
  { name: "Żwywiołak", value: "elemental" },
];

const DetailsFilterMinionType = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedMinionType, setSelectedMinionType] = useState(
    "Dowolny typ stronnika"
  );

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = minionType.filter((x) => x.value === value);
    setSelectedMinionType(value);
    if (value === "Dowolny typ stronnika") {
      value = "";
    }
    dispatch(changeMinionType({ name: targetName[0].name, value }));
  };

  useEffect(() => {
    if (filters.minionType.value === "") {
      setSelectedMinionType("Dowolny typ stronnika");
    }
  }, [filters.minionType]);

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
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterMinionType;
