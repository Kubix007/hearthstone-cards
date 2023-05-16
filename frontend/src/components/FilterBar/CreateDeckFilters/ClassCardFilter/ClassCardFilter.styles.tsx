import { Box } from "@mui/material";
import styled from "styled-components";
import * as Types from "./ClassCardFilter.types";

export const ClassCardContainer = styled(Box)``;

export const ClassCardButton = styled.button`
  background-color: transparent;
  border: 0px;
  width: fit-content;
  height: fit-content;
`;

export const ClassCardImage = styled(Box)<Types.IProps>`
  background: url(${(props) => props.$backgroundImg});
  max-width: 68px;
  max-height: 68px;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-color: transparent;
  position: relative;
  left: 11.5px;
  top: 11px;
  cursor: pointer;
`;
