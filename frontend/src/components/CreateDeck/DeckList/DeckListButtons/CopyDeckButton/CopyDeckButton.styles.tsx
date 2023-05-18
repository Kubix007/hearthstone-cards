import { Box, Button } from "@mui/material";
import styled from "styled-components";
import * as Types from "./CopyDeckButton.types";
import { ReactComponent as ArrowIcon } from "../../../../../img/CreateDeck/CopyDeckArrow.svg";

export const ButtonContainer = styled(Box)`
  background-image: linear-gradient(180deg, #ededed, #573b23);
  border-radius: 6px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.45);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.3);
  padding: 5px 20px;
  width: 207px;
  height: 34px;
  position: absolute;
  bottom: 28px;
  right: 125px;
`;

export const CopyDeckButton = styled(Button)`
  &.MuiButton-root {
    font-family: BelweBoldBT;
    color: white;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 45%);
    background-image: linear-gradient(90deg, #4c0d7a, #b921c4, #4c0d7a);
    width: 240px;
    height: 35px;
    position: absolute;
    bottom: 6px;
    right: 3px;
    :hover {
      background-image: linear-gradient(90deg, #921b9a, #b921c4, #921b9a);
    }
  }
`;

export const CopyDeckArrow = styled(ArrowIcon)<Types.IPropsArrowIcon>`
  fill: white;
  height: 15px;
  position: absolute;
  right: -100px;
  top: 20px;
  ${(props) =>
    props.$isclicked
      ? "transform: translateY(-50%) rotate(270deg)"
      : "transform: translateY(-50%) rotate(90deg)"}
`;
