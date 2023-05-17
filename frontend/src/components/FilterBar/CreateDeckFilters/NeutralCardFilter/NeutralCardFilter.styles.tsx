import { Box, Typography } from "@mui/material";
import * as Types from "./NeutralCardFilter.types";
import styled from "styled-components";

export const NeutralCardContainer = styled(Box)``;

export const NeutralCardButton = styled.button`
  background-color: transparent;
  border: 0px;
  width: fit-content;
  height: fit-content;
`;

export const NeutralCardImage = styled(Box)<Types.IProps>`
  max-width: 68px;
  max-height: 68px;
  width: 50px;
  height: 50px;
  background-size: contain;
  background-color: transparent;
  position: relative;
  left: 25.2px;
  top: 11px;
  cursor: pointer;
  ${(props) => {
    if (props.$isNeutralSelected) {
      if (props.$isClassSelected) {
        return "left: 0px; top: 2px; width: 80px;height: 80px;background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_selector_hover-ce1b9bf81779f9f94e109767ee4f47d12a9b0066cc093b89853332934f41d9f5fc03fe4b6b20543035d8ff30fb407e3ff6d31c4ea330c2f19acf79013a8e44e6.png) center center no-repeat,url(https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_neutral-e836ab9e0aa9b3f8b9554ff90febed749e0de75b7fde02e1c6f31334931785e1fb7405651ba85e74364cd44112d5157e78ee436e558325b2880b08a8c73d3695.png) center center / 55px 55px no-repeat;";
      } else {
        return "left: 17px; top: 2px; width: 80px;height: 80px;background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/class_selector_hover-ce1b9bf81779f9f94e109767ee4f47d12a9b0066cc093b89853332934f41d9f5fc03fe4b6b20543035d8ff30fb407e3ff6d31c4ea330c2f19acf79013a8e44e6.png) center center no-repeat,url(https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_neutral-e836ab9e0aa9b3f8b9554ff90febed749e0de75b7fde02e1c6f31334931785e1fb7405651ba85e74364cd44112d5157e78ee436e558325b2880b08a8c73d3695.png) center center / 55px 55px no-repeat;";
      }
    } else {
      if (props.$isClassSelected) {
        return "background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_neutral-e836ab9e0aa9b3f8b9554ff90febed749e0de75b7fde02e1c6f31334931785e1fb7405651ba85e74364cd44112d5157e78ee436e558325b2880b08a8c73d3695.png); background-size: contain; left: 7px;";
      } else {
        return "background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/icons/classes/icon_class_neutral-e836ab9e0aa9b3f8b9554ff90febed749e0de75b7fde02e1c6f31334931785e1fb7405651ba85e74364cd44112d5157e78ee436e558325b2880b08a8c73d3695.png); background-size: contain; left: 25px;";
      }
    }
  }}
`;

export const NeutralCardTooltipTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    font-size: 14px;
    color: rgb(97, 67, 38);
  }
`;
