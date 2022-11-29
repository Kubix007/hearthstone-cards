import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { useDispatch } from "react-redux";
import { changeAttack } from "../../../features/filter/filterSlice";
import DetailsFilterAttackIcon from "../../../img/DetailsFilterImg/DetailsFilterAttackIcon.png";
import * as Styles from "./DetailsFilterAttack.style";

const attacks = [
  { name: "Dowolny atak", value: "Dowolny atak" },
  { name: "Atak: 0", value: "0" },
  { name: "Atak: 1", value: "1" },
  { name: "Atak: 2", value: "2" },
  { name: "Atak: 3", value: "3" },
  { name: "Atak: 4", value: "4" },
  { name: "Atak: 5", value: "5" },
  { name: "Atak: 6", value: "6" },
  { name: "Atak: 7", value: "7" },
  { name: "Atak: 8", value: "8" },
  { name: "Atak: 9", value: "9" },
];

const DetailsFilterAttack = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [attackNumber, setAttackNumber] = useState({
    value: "Dowolny atak",
    name: "Dowolny atak",
  });

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = attacks.filter((x) => x.value === value);
    setAttackNumber({
      value: attacks.filter((x) => x.value === value)[0].value,
      name: attacks.filter((x) => x.value === value)[0].name,
    });
    if (value === "Dowolny atak") {
      value = "";
    }
    dispatch(changeAttack({ name: targetName[0].name, value: value }));
  };

  useEffect(() => {
    if (filters.attack.value === "") {
      setAttackNumber({ value: "Dowolny atak", name: filters.attack.name });
    }
  }, [filters.attack]);

  return (
    <Styles.Container>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo
          src={DetailsFilterAttackIcon}
          alt="LeftListLogo"
          width="30px"
          height="30px"
        />
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={attackNumber.value}
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
        {attacks.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterAttack;
