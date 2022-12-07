import { useState } from "react";
import { SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeSortType } from "../../../features/filter/filterSlice";
import * as Styles from "./SortSelect.style";

const sortType = [
  { name: "Mana: rosnąco", value: "manaCost:asc" },
  { name: "Mana: malejąco", value: "manaCost:desc" },
  { name: "Nazwa karta: od A do Z", value: "name:asc" },
  { name: "Nazwa karta: od Z do A", value: "name:desc" },
  { name: "Atak: rosnąco", value: "attack:asc" },
  { name: "Atak: malejąco", value: "attack:desc" },
  { name: "Zdrowie: rosnąco", value: "health:asc" },
  { name: "Zdrowie: malejąco", value: "health:desc" },
];

const SortSelect = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedSortType, setSelectedSortType] = useState(filters.sort.name);

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = sortType.filter((x) => x.name === value);
    setSelectedSortType(value);
    dispatch(changeSortType({ name: value, value: targetName[0].value }));
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout />
      <Styles.SelectClass
        value={selectedSortType}
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
        {sortType.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.name}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default SortSelect;
