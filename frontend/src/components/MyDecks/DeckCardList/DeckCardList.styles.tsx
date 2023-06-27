import { Grid } from "@mui/material";
import styled from "styled-components";

export const GridContainer = styled(Grid)`
  &.MuiGrid-root {
  }
`;

export const GridItem = styled(Grid)`
  &.MuiGrid-root {
    max-width: none;
  }
`;
