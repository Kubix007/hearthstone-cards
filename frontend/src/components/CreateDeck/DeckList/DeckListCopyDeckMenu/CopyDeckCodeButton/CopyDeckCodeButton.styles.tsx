import { Typography } from "@mui/material";
import * as Types from "./CopyDeckCodeButton.types";
import styled from "styled-components";

export const CopyDeckCodeButtonContainer = styled.button`
  background: transparent;
  border: none;
  text-align: left;
  height: 50px;
  margin-top: 10px;
  width: 345px;
  position: relative;
  z-index: 2;
  :hover {
    background: black;
  }
  &:disabled {
    background: none;
    cursor: inherit;
  }
  cursor: pointer;
`;

export const PrimaryText = styled(Typography)<Types.IProps>`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    font-size: 16px;
    margin-left: 20px;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    ${(props) =>
      props.$disabled
        ? "color: rgb(120, 115, 111);"
        : "  color: rgb(255, 255, 255);"}
  }
`;

export const SecondaryText = styled(Typography)<Types.IProps>`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    margin-left: 20px;
    font-size: 12px;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    ${(props) =>
      props.$disabled
        ? "color: rgb(120, 115, 111);"
        : "color: rgb(195, 195, 194);"}
  }
`;

export const DeckCardsCount = styled(Typography)<Types.IProps>`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: inherit;
    font-size: 16px;
    position: relative;
    height: fit-content;
    width: fit-content;
    left: 295px;
    bottom: 35px;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
    ${(props) =>
      props.$disabled
        ? "color: rgb(120, 115, 111);"
        : "color: rgb(162, 241, 48);"}
  }
`;
