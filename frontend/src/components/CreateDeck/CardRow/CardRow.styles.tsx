import { Box, Typography } from "@mui/material";
import * as Types from "./CardRow.types";
import styled from "styled-components";

export const CardRowContainer = styled(Box)`
  display: flex;
  width: 350px;
  margin-left: 10px;
  margin-right: 0px;
  margin-bottom: 2px;
`;

export const CardRowCost = styled(Box)`
  height: 44px;
  width: 55px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_left-c1a0e1834e1ff7351c0f929282db3cfb44293b366a4433ffdfc0c097ebd01bbc2951caaf3bd03379be1f30907a58fcaf7c8a1f2ea60805bcec1519e216ee0d54.png)
    0% 0% / 50px 44px no-repeat;
  text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
    rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
    rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
    rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
    rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
    rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
    rgb(0 0 0) 1.92034px -0.55883px 0px;
`;

export const CardCost = styled(Typography)`
  &.MuiTypography-root {
    height: 100%;
    position: absolute;
    left: 52px;
    font-size: 26px;
    font-family: BelweBoldBT;
    color: white;
    text-align: center;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const CardRowName = styled(Box)`
  position: absolute;
  width: 282px;
  height: 44px;
  left: 75px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_middle-356a94f18c483c86b6cc02773fda2d345259b428932db41718e7be1873e8a737cd2ae5c58ff7ded8144f81ecb7748f1b1e2e50ad155c993b40d86fa1c3a825ac.png)
    0% 0% / 100% 44px no-repeat;
`;

export const CardRowImage = styled(Box)<Types.ComponentProps>`
  position: absolute;
  z-index: -2;
  width: 305px;
  left: 55px;
  height: 44px;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

export const CardName = styled(Typography)`
  &.MuiTypography-root {
    height: 100%;
    position: absolute;
    top: 8px;
    left: 15px;
    font-family: BelweBoldBT;
    color: white;
    text-align: center;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const CardRowCount = styled(Box)`
  position: absolute;
  right: 15px;
  width: 65px;
  height: 44px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_right-cc4f9b7f9f64ddf99755527449897fa91a5d699b6aa8f12ad79bfdb04113c49d92a4d7c9c1689b1373459393410b19c29da235465833f5c51f0b026f3737eb2b.png)
    0% 0% / 50px 44px no-repeat;
  text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
    rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
    rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
    rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
    rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
    rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
    rgb(0 0 0) 1.92034px -0.55883px 0px;
`;

export const CardCount = styled(Typography)`
  &.MuiTypography-root {
    height: 100%;
    position: absolute;
    top: 2px;
    right: 25px;
    font-size: 25px;
    font-family: BelweBoldBT;
    color: rgb(252, 209, 68);
    text-align: center;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;
