import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const CardDeckFullPopupContainer = styled(Box)`
  position: absolute;
  top: 30%;
  display: flex;
  align-items: center;
  width: 240px;
  height: 120px;
  pointer-events: none;
  border-radius: 5px;
  background: rgb(242, 235, 227);
  border: 2px solid black;
  cursor: auto;
  box-shadow: rgba(0, 0, 0, 0.8) 0px 2px 10px;
  text-align: center;
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
  animation: bounce 1s;
`;

export const PopupText = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(137, 0, 0);
    font-size: 20px;
  }
`;
