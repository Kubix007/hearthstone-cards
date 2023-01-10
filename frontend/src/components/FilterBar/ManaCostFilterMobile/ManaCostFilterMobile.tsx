import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { setManaCost } from "../../../features/filter/filterSlice";
import ManaIcon from "../../../img/manaIcon.png";
import * as Styles from "./ManaCostFilterMobile.styles";

const manaCrystals = [
  {
    name: "Mana: Dowolny",
    value: "Mana: Dowolny",
  },
  {
    name: "Mana: 1",
    value: "1",
  },
  {
    name: "Mana: 2",
    value: "2",
  },
  {
    name: "Mana: 3",
    value: "3",
  },
  {
    name: "Mana: 4",
    value: "4",
  },
  {
    name: "Mana: 5",
    value: "5",
  },
  {
    name: "Mana: 6",
    value: "6",
  },
  {
    name: "Mana: 7",
    value: "7",
  },
  {
    name: "Mana: 8",
    value: "8",
  },
  {
    name: "Mana: 9",
    value: "9",
  },
  {
    name: "Mana: 10+",
    value: "10",
  },
];

const ManaCostFilterMobile = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [manaValue, setManaValue] = useState({
    name: "Mana: Dowolny",
    value: "Mana: Dowolny",
  });

  useEffect(() => {
    setManaValue({
      name: manaCrystals.filter((x) => x.name === filters.manaCost.name)[0]
        .name,
      value: manaCrystals.filter((x) => x.name === filters.manaCost.name)[0]
        .value,
    });
  }, [filters.manaCost]);

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = manaCrystals.filter((x) => x.value === value);
    setManaValue({
      name: value,
      value: manaCrystals.filter((x) => x.value === value)[0].value,
    });
    if (value === "Mana: Dowolny") {
      value = "";
    }
    dispatch(setManaCost({ name: targetName[0].name, value: value }));
  };

  return (
    <Styles.ManaFilterMobileContainer>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo
          src={ManaIcon}
          alt="ManaMobileIcon"
          width="35px"
          height="35px"
        />
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={manaValue.value}
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
        {manaCrystals.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.ManaValueName>{item.name}</Styles.ManaValueName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.ManaFilterMobileContainer>
  );
};

export default ManaCostFilterMobile;
