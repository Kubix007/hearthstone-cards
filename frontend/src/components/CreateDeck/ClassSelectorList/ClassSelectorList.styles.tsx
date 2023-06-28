import { Grid } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Grid)`
  &.MuiGrid-root {
    margin-top: 5%;
    width: 100%;
    height: 100%;
  }
`;

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    @media only screen and (max-width: 512px) {
      width: 180px;
      height: 120px;
    }
    @media only screen and (max-width: 377px) {
      width: 130px;
      height: 100px;
    }
  }
`;
