import * as Styles from "./CardsLayout.style";
import { useState } from "react";
import { Grow } from "@mui/material";
import * as Types from "./CardsLayout.types";

const CardsLayout = ({ cards }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styles.Container>
      <Grow timeout={500} in={isLoaded}>
        <Styles.Card>
          <Styles.Cover
            src={cards.image}
            alt="Film Cover"
            onLoad={() => setIsLoaded(true)}
          />
        </Styles.Card>
      </Grow>
    </Styles.Container>
  );
};

export default CardsLayout;
