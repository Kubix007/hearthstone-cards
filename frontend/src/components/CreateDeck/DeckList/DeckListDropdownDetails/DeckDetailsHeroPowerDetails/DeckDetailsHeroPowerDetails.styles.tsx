import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  position: absolute;
  top: 100px;
  left: 180px;
  text-align: left;
  margin-right: 10px;
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweLightBT;
    font-size: 17px;
    color: rgb(105, 104, 104);
  }
`;

export const HeroPowerName = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    font-size: 17px;
    color: rgb(215, 187, 147);
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const HeroPowerDescription = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweCondensedBT;
    font-size: 17px;
    color: white;
  }
`;
