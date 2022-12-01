import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeRarity } from "../../../features/filter/filterSlice";
import * as Styles from "./DetailsFilterRarity.style";

const rarity = [
  { name: "Dowolna rzadkość", value: "Dowolna rzadkość" },
  { name: "Zwykła", value: "common" },
  { name: "Za darmo", value: "free" },
  { name: "Rzadko", value: "rare" },
  { name: "Epicka", value: "epic" },
  { name: "Legendarna", value: "legendary" },
];

const DetailsFilterRarity = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedRarity, setSelectedRarity] = useState("Dowolna rzadkość");

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = rarity.filter((x) => x.value === value);
    setSelectedRarity(value);
    if (value === "Dowolna rzadkość") {
      value = "";
    }
    dispatch(changeRarity({ name: targetName[0].name, value }));
  };

  useEffect(() => {
    if (filters.rarity.value === "") {
      setSelectedRarity("Dowolna rzadkość");
    }
  }, [filters.rarity]);

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
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterRarity;
