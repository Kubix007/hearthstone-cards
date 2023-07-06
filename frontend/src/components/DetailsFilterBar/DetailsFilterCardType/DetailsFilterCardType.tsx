import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import * as Styles from "./DetailsFilterCardType.style";
import { changeTypeCard } from "../../../features/filter/filterSlice";

const typeCard = [
  { name: "Rodzaj karty", value: "Rodzaj karty" },
  { name: "Bohater", value: "hero" },
  { name: "Stronnik", value: "minion" },
  { name: "Zaklęcie", value: "spell" },
  { name: "Broń", value: "weapon" },
  { name: "Lokalizacja", value: "location" },
];

const DetailsFilterCardType = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [selectedTypeCard, setSelectedTypeCard] = useState("Rodzaj karty");

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = typeCard.filter((x) => x.value === value);
    setSelectedTypeCard(value);
    if (value === "Rodzaj karty") {
      value = "";
    }
    dispatch(changeTypeCard({ name: targetName[0].name, value }));
  };

  useEffect(() => {
    if (filters.type.value === "") {
      setSelectedTypeCard("Rodzaj karty");
    }
  }, [filters.type]);

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
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterCardType;
