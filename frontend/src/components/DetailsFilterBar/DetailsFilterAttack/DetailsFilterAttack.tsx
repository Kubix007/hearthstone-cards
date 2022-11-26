import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import DetailsFilterAttackIcon from "../../../img/DetailsFilterImg/DetailsFilterAttackIcon.png";
import * as Styles from "./DetailsFilterAttack.style";

const attacks = [
  "Dowolny atak",
  "Atak: 0",
  "Atak: 1",
  "Atak: 2",
  "Atak: 3",
  "Atak: 4",
  "Atak: 5",
  "Atak: 6",
  "Atak: 7",
  "Atak: 8",
  "Atak: 9",
];

const DetailsFilterAttack = () => {
  const [attackNumber, setAttackNumber] = useState("Dowolny atak");

  const handleChange = (event: SelectChangeEvent) => {
    setAttackNumber(event.target.value);
  };

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
        value={attackNumber}
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
          <Styles.SelectMenuItem key={item} value={item}>
            <Styles.SelectName>{item}</Styles.SelectName>
          </Styles.SelectMenuItem>
        ))}
      </Styles.SelectClass>
      <Styles.RightListLayout />
    </Styles.Container>
  );
};

export default DetailsFilterAttack;
