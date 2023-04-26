import styled from "styled-components";
import * as Types from "./BrowseCards.types";
import { Box, Grid } from "@mui/material";

export const Cards = styled(Box)<Types.Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: ${(props) => props.size}px;
`;

export const CardsContainer = styled(Box)`
  display: flex;
  margin-top: 20px;
`;

export const Center = styled(Grid)``;
