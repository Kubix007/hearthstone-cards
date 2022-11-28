import React from "react";
import * as Styles from "./ManaCostFilter.style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";
import {
  addManaCost,
  reduceManaCost,
} from "../../../features/filter/filterSlice";

const ManaCostFilter = () => {
  const manaCrystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, "10+"];
  const dispatch: AppDispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    let manaCost = (event.target as HTMLButtonElement).value;
    let button = document.getElementById(
      (event.target as HTMLButtonElement).id
    );
    if (button?.getAttribute("class")?.includes("selected")) {
      button?.setAttribute(
        "class",
        `${button?.getAttribute("class")!}`.replace("selected", "").trimEnd()
      );
      dispatch(reduceManaCost(manaCost));
    } else {
      button?.setAttribute(
        "class",
        `${button?.getAttribute("class")!} selected`
      );
      dispatch(addManaCost(manaCost));
    }
  };

  return (
    <Styles.ManaCostFilterContainer>
      <Styles.ManaCostFilterContainerLeft />
      <Styles.ManaCostFilterContainerCenter>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
            height: "58px",
          }}
        >
          {manaCrystals.map((item) => (
            <Styles.ManaCrystal
              className="manaCrystal"
              id={item.toString()}
              onClick={handleClick}
              key={item}
              value={item}
            >
              {item}
            </Styles.ManaCrystal>
          ))}
        </div>
      </Styles.ManaCostFilterContainerCenter>
      <Styles.ManaCostFilterContainerRight />
    </Styles.ManaCostFilterContainer>
  );
};

export default ManaCostFilter;
