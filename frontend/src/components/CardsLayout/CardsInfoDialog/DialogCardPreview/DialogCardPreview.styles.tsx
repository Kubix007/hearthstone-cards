import { Typography } from "@mui/material";
import styled from "styled-components";

export const Cover = styled.img`
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;

export const CardName = styled(Typography)`
  &.MuiTypography-root {
    color: rgb(255, 255, 255);
    font-size: 30px;
    margin-bottom: 0px;
    word-break: keep-all;
    font-family: BelweBoldBT;
    letter-spacing: -1px;
  }
`;

export const AdditionalText = styled(Typography)`
  &.MuiTypography-root {
    font-size: 20px;
    color: rgb(135, 134, 132);
    margin-bottom: 0px;
    word-break: keep-all;
    font-family: BelweLightBT;
    max-width: 580px;
    font-style: italic;
  }
`;

export const Keywords = styled(Typography)`
  &.MuiTypography-root {
    margin-top: 10px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin-bottom: 0px;
    word-break: keep-all;
    font-family: BelweMediumBT;
    max-width: 580px;
  }
`;

export const Ul = styled.ul`
  list-style: square;
  color: rgb(255, 229, 172);
  margin-top: 20px;
  line-height: 1.75;
`;

export const Li = styled.li`
  list-style-type: disc;
  margin-left: 20px;
`;

export const ItemName = styled.span`
  color: rgb(255, 229, 172);
  font-family: BelweMediumBT;
`;

export const ItemValue = styled.span`
  margin-left: 5px;
  color: white;
  font-family: BelweMediumBT;
`;
