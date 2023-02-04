import { Box, Paper, Typography } from "@mui/material";
import styled from "styled-components";
import * as Types from "./ClassSelector.types";

export const Container = styled.div``;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  height: 220px;
  box-shadow: none;
  &.MuiPaper-root {
    box-shadow: none;
    background: none;
  }
`;

export const Cover = styled(Box)<Types.ICoverProps>`
  background: url(${(props) => props.src});
  width: 240px;
  height: 200px;
  &:hover {
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/frame_class_portrait_hover-0fe18e7eeb22e9f78e7226fb438e6a8d12b78946b58ae5d735d7869714c62848a7772c8bc424c54063d749bdb6c96d7c83e1617694c5f79b15cf1656651551c7.png)
        center,
      url(${(props) => props.src});
  }
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ClassName = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    color: rgb(252, 209, 68);
    font-family: BelweBoldBT;
    height: 30%;
    margin-left: 40px;
  }
`;
