import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import * as Styles from "./DetailsFilterHealth.style";
import DetailsFilterHealthIcon from "../../../img/DetailsFilterImg/DetailsFilterHealthIcon.png";

const health = [
  "Dowolne zdrowie",
  "Zdrowie: 1",
  "Zdrowie: 2",
  "Zdrowie: 3",
  "Zdrowie: 4",
  "Zdrowie: 5",
  "Zdrowie: 6",
  "Zdrowie: 7",
  "Zdrowie: 8",
  "Zdrowie: 9",
];

const DetailsFilterHealth = () => {
  const [healthNumber, setHealthNumber] = useState("Dowolne zdrowie");

  const handleChange = (event: SelectChangeEvent) => {
    setHealthNumber(event.target.value);
  };

  return (
    <Styles.Container>
      <Styles.LeftListLayout>
        <Styles.LeftListLogo
          src={DetailsFilterHealthIcon}
          alt="LeftListLogo"
          width="30px"
          height="30px"
        />
      </Styles.LeftListLayout>
      <Styles.SelectClass
        value={healthNumber}
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
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterHealth;
