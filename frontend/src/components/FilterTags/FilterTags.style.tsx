import { Box, Grid } from "@mui/material";
import styled from "styled-components";

export const FilterTagsContainer = styled(Grid)`
  &.MuiGrid-root {
    justify-content: space-between;
    @media screen and (max-width: 1350px) {
      justify-content: space-around;
    }
    @media screen and (max-width: 1145px) {
      flex-direction: column;
    }
  }
`;

export const MainTag = styled(Grid)`
  margin-left: 10px;
  color: rgb(97, 67, 38);
  font-family: "BelweLightBT";
  font-weight: bold;
  font-size: 18px;
`;

export const TagsContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const GridTagsContainer = styled(Grid)`
  align-self: flex-start;
  &.MuiGrid-root {
    margin-top: 10px;
    @media screen and (max-width: 1145px) {
      align-self: center;
    }
  }
`;
