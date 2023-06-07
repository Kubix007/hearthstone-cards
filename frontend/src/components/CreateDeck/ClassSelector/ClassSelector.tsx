import { Grow } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { setClass } from "../../../features/createDeck/createDeckSlice";
import * as Styles from "./ClassSelector.styles";
import * as Types from "./ClassSelector.types";
import {
  changeClass,
  changeNeutralCards,
  changeSet,
} from "../../../features/filter/filterSlice";
import { getHeroPowerCard } from "../../../features/createDeck/createDeckSlice";

const ClassSelector = ({ classInfo, selectedFormat }: Types.IProps) => {
  const [, setIsLoaded] = useState(false);
  const { metadata } = useSelector((state: RootState) => state.metadata);

  const dispatch: AppDispatch = useDispatch();

  const getHeroInfo = (slugName: string) => {
    const heroDetails = metadata.classes.filter(
      (item) => item.slug === slugName
    );
    return heroDetails;
  };

  const handleClick = (className: string) => {
    const heroDetails = getHeroInfo(className);
    let gameMode,
      formatValue,
      formatName = "";
    if (selectedFormat.classic) {
      formatName = "Karty klasyczne";
      gameMode = "Klasyczne";
      formatValue = "classic";
    } else if (selectedFormat.standard) {
      formatName = "Karty standardowe";
      gameMode = "Standard";
      formatValue = "standard";
    } else {
      formatName = "Dzikie karty";
      gameMode = "Dzicz";
      formatValue = "wild";
    }
    dispatch(
      setClass({
        hero: heroDetails[0],
        gameMode: gameMode,
        class: {
          name: heroDetails[0].name,
          id: heroDetails[0].cardId,
          slug: heroDetails[0].slug,
        },
      })
    );
    dispatch(
      changeClass({ name: heroDetails[0].name, value: heroDetails[0].slug })
    );
    dispatch(changeSet({ name: formatName, value: formatValue }));
    dispatch(getHeroPowerCard(heroDetails[0].heroPowerCardId));
    dispatch(changeNeutralCards(true));
  };
  return (
    <Styles.Container
      isclassic={classInfo.isNotClassic && selectedFormat.classic}
    >
      <Grow timeout={500} in={true}>
        <Styles.Card>
          <Styles.Cover
            src={classInfo.image}
            alt={classInfo.name}
            onLoad={() => setIsLoaded(true)}
            onClick={() => handleClick(classInfo.name)}
          >
            <Styles.ClassName>{classInfo.displayName}</Styles.ClassName>
          </Styles.Cover>
        </Styles.Card>
      </Grow>
    </Styles.Container>
  );
};

export default ClassSelector;
