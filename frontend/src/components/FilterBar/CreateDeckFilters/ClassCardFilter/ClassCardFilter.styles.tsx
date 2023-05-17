import { Box, Typography } from "@mui/material";
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
  ${(props) => {
    if (props.$isClassSelected) {
      return `left: 3px; top: 2px; width: 80px;height: 80px;background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_selector_hover-ce1b9bf81779f9f94e109767ee4f47d12a9b0066cc093b89853332934f41d9f5fc03fe4b6b20543035d8ff30fb407e3ff6d31c4ea330c2f19acf79013a8e44e6.png) center center no-repeat,url(${props.$backgroundImg}) center center / 55px 55px no-repeat;`;
    } else {
      return `left: 5px;background: url(${props.$backgroundImg}); background-size: contain; left: 10.5px;`;
    }
  }}
`;

export const ClassCardTooltip = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    font-size: 14px;
    color: rgb(97, 67, 38);
  }
`;
