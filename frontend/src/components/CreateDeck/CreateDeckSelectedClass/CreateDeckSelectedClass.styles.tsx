import styled from "styled-components";
import * as Types from "./CreateDeckSelectedClass.types";
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

export const ContentContainer = styled(Box)<Types.ContainerProps>`
  @media only screen and (max-width: 338px) {
    grid-template-columns: ${(props) => (props.$isMobile ? "4fr 2fr" : "")};
  }
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isMobile ? "6fr 1fr" : "3fr 1fr"};
  grid-template-rows: 100% 100%;
`;

export const DeckContainer = styled(Box)``;

export const Center = styled(Grid)``;

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
