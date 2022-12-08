import * as Styles from "./CardsLayout.style";
import { useState } from "react";
import { Grow } from "@mui/material";
import * as Types from "./CardsLayout.types";
import CardsInfoPopover from "./CardsInfoPopover";
import React from "react";

const CardsLayout = ({ cards }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <Styles.Container>
      <Grow timeout={500} in={isLoaded}>
        <Styles.Card>
          <Styles.Cover
            src={cards.image}
            alt={cards.name}
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            onLoad={() => setIsLoaded(true)}
          />
        </Styles.Card>
      </Grow>
      {cards.keywordIds ? (
        <CardsInfoPopover
          keywordsIds={cards.keywordIds}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          handlePopoverClose={handlePopoverClose}
          handlePopoverOpen={handlePopoverOpen}
        />
      ) : null}
    </Styles.Container>
  );
};

export default CardsLayout;
