import styled from "styled-components";
import { Button } from "@mui/material";

export const ClearButton = styled(Button)`
  &.MuiButtonBase-root {
    display: inline-flex;
    border: none;
    padding: 3px 10px;
    font-size: 14px;
    background: rgb(255, 240, 218, 0.5);
    border: 1px solid rgb(97, 67, 38);
    border-radius: 15px;
    margin-left: 5px;
    color: rgb(35, 58, 110);
    text-transform: none;
    font-family: BelweMediumBT;
    &:hover {
      color: rgb(255, 255, 255);
      background: rgb(35, 58, 110);
      border-color: rgb(35, 58, 110);
      opacity: 1;
      .clearButtonIcon {
        fill: rgb(255, 255, 255);
      }
    }
  }
  color: black;
`;
