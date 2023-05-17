import { useDispatch, useSelector } from "react-redux";
import * as Styles from "./NeutralCardFilter.styles";
import { AppDispatch, RootState } from "../../../../app/store";
import { Tooltip } from "@mui/material";
import {
  changeNeutralCards,
  changeClassForCreateDeck,
} from "../../../../features/filter/filterSlice";

const NeutralCardFilter = () => {
  const { filters } = useSelector((state: RootState) => state.filter);
  const { deck } = useSelector((state: RootState) => state.createDeck);
  const isClassSelected = filters.class.value.length > 0 ? true : false;
  const isNeutralSelected = filters.neutralCards.length > 0 ? true : false;
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    if (isNeutralSelected) {
      if (isClassSelected) {
        dispatch(changeNeutralCards(!isNeutralSelected));
      } else {
        dispatch(changeNeutralCards(!isNeutralSelected));
        dispatch(changeClassForCreateDeck(deck.hero?.slug));
      }
    } else {
      dispatch(changeNeutralCards(!isNeutralSelected));
    }
  };

  return (
    <Styles.NeutralCardContainer onClick={handleClick}>
      <Styles.NeutralCardButton>
        <Tooltip
          arrow
          title={
            <Styles.NeutralCardTooltipTitle>
              Neutralne
            </Styles.NeutralCardTooltipTitle>
          }
          placement="bottom"
          PopperProps={{
            sx: {
              "& .MuiTooltip-tooltip": {
                border: "2px solid black",
                background: "rgb(242, 235, 227)",
                borderRadius: "7px",
              },
              "& .MuiTooltip-arrow": {
                color: "rgb(242, 235, 227)",
              },
            },
          }}
        >
          <Styles.NeutralCardImage
            $isClassSelected={isClassSelected}
            $isNeutralSelected={isNeutralSelected}
          />
        </Tooltip>
      </Styles.NeutralCardButton>
    </Styles.NeutralCardContainer>
  );
};

export default NeutralCardFilter;
