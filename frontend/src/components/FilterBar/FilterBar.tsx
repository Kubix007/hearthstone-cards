import ManaCostFilter from "./ManaCostFilter";
import ClassFilter from "./ClassFilter";
import TypeCardsFilter from "./TypeCardsFilter";
import SearchFilter from "./SearchFilter";
import DetailsFilterButton from "../DetailsFilterBar/DetailsFilterButton";
import DetailsFilterContainer from "../DetailsFilterBar/DetailsFilterContainer";
import ManaCostFilterMobile from "./ManaCostFilterMobile";
import CreateDeckFilters from "./CreateDeckFilters";
import MobileButton from "./MobileButton";
import DrawbarMenu from "../DrawbarMenu";
import { useEffect, useState } from "react";
import { BreakPointTheme } from "../../themes/Themes";
import { Box, ThemeProvider } from "@mui/material";
import * as Styles from "./FilterBar.style";
import * as Types from "./FilterBar.types";

const FilterBar = ({ showClassFilter }: Types.IFilterBarProps) => {
  const [isVisible, setVisible] = useState(false);
  const [isShowed, setIsShowed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (screenWidth >= 1150) {
      setIsShowed(false);
    } else {
      setIsShowed(isVisible);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenWidth]);
  return (
    <ThemeProvider theme={BreakPointTheme}>
      <Styles.Container>
        <Styles.TopBarContainer />
        <Styles.FiltersContainer>
          <Box
            sx={{
              [BreakPointTheme.breakpoints.down("bg")]: {
                display: "none",
              },
              display: "flex",
            }}
          >
            {!showClassFilter && <CreateDeckFilters />}
          </Box>
          <TypeCardsFilter />
          <Box
            sx={{
              [BreakPointTheme.breakpoints.down("bg")]: {
                display: "none",
              },
              display: "flex",
            }}
          >
            {showClassFilter && <ClassFilter />}
            <ManaCostFilter />
            <ManaCostFilterMobile />
          </Box>
          <SearchFilter />
          <DetailsFilterButton setVisible={setVisible} isVisible={isVisible} />
          <MobileButton isShowed={isShowed} setIsShowed={setIsShowed} />
        </Styles.FiltersContainer>
        {isVisible && <DetailsFilterContainer />}
        <DrawbarMenu
          showClassFilter={showClassFilter}
          isShowed={isShowed}
          setIsShowed={setIsShowed}
        />
      </Styles.Container>
    </ThemeProvider>
  );
};

export default FilterBar;
