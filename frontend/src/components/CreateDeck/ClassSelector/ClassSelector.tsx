import { Grow } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { setClass } from "../../../features/createDeck/createDeckSlice";
import * as Styles from "./ClassSelector.styles";
import * as Types from "./ClassSelector.types";

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
    let format = "";
    if (selectedFormat.classic) {
      format = "Klasyczne";
    } else if (selectedFormat.standard) {
      format = "Standard";
    } else {
      format = "Dzicz";
    }
    dispatch(setClass({ hero: heroDetails[0], gameMode: format }));
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
