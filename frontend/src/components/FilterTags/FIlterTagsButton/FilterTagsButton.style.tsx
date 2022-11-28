import { Button } from "@mui/material";
import styled from "styled-components";

export const FilterTags = styled(Button)`
  &.MuiButtonBase-root {
    display: inline-flex;
    background-color: rgb(97, 67, 38);
    color: rgb(255, 255, 255);
    border-radius: 15px;
    padding: 3px 10px;
    margin-left: 5px;
    margin-bottom: 10px;
    font-family: BelweMediumBT;
    font-size: 14px;
    text-transform: none;
    &:hover {
      background-color: rgb(35, 58, 110);
    }
  }
`;

export const CloseIcon = styled.span`
  background: none;
  display: inline;
  margin: 0px 0px 0px 10px;
  padding: 0px;
  color: rgb(252, 209, 68);
`;
