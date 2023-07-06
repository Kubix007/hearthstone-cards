import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import * as Styles from "./DetailsFilterHealth.style";
import { changeHealth } from "../../../features/filter/filterSlice";
import DetailsFilterHealthIcon from "../../../img/DetailsFilterImg/DetailsFilterHealthIcon.png";
import { AppDispatch, RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import * as Types from "./DetailsFIlterHealth.types";

const health = [
  { name: "Zdrowie", value: "Zdrowie" },
  { name: "Zdrowie: 1", value: "1" },
  { name: "Zdrowie: 2", value: "2" },
  { name: "Zdrowie: 3", value: "3" },
  { name: "Zdrowie: 4", value: "4" },
  { name: "Zdrowie: 5", value: "5" },
  { name: "Zdrowie: 6", value: "6" },
  { name: "Zdrowie: 7", value: "7" },
  { name: "Zdrowie: 8", value: "8" },
  { name: "Zdrowie: 9", value: "9" },
];

const DetailsFilterHealth = ({ isShowed }: Types.IProps) => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const dispatch: AppDispatch = useDispatch();
  const [healthNumber, setHealthNumber] = useState({
    name: "Zdrowie",
    value: "Zdrowie",
  });

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value;
    const targetName = health.filter((x) => x.value === value);
    setHealthNumber({
      value: health.filter((x) => x.value === value)[0].value,
      name: health.filter((x) => x.value === value)[0].name,
    });
    if (value === "Zdrowie") {
      value = "";
    }
    dispatch(changeHealth({ name: targetName[0].name, value: value }));
  };

  useEffect(() => {
    if (filters.health.value === "") {
      setHealthNumber({
        value: "Zdrowie",
        name: filters.health.name,
      });
    }
  }, [filters.health]);

  return (
    <Styles.Container>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo
          src={DetailsFilterHealthIcon}
          alt="LeftListLogo"
          width="30px"
          height="30px"
          $isShowed={isShowed}
        />
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={healthNumber.value}
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
        {health.map((item) => (
          <Styles.SelectMenuItem key={item.name} value={item.value}>
            <Styles.SelectName>{item.name}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterHealth;
