import { Grow } from "@mui/material";
import { useState } from "react";
import * as Styles from "./ClassSelector.styles";
import * as Types from "./ClassSelector.types";

const ClassSelector = ({ classInfo, selectedFormat }: Types.IProps) => {
  const [, setIsLoaded] = useState(false);

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
          >
            <Styles.ClassName>{classInfo.displayName}</Styles.ClassName>
          </Styles.Cover>
        </Styles.Card>
      </Grow>
    </Styles.Container>
  );
};

export default ClassSelector;
