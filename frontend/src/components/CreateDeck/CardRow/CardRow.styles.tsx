import { Box, Typography } from "@mui/material";
import * as Types from "./CardRow.types";
import styled from "styled-components";
import { ReactComponent as ControlInfoImage } from "../../../img/CreateDeck/CardRowControlInfo.svg";
import { ReactComponent as ControlAddImage } from "../../../img/CreateDeck/CardRowControlAdd.svg";
import { ReactComponent as ControlRemoveImage } from "../../../img/CreateDeck/CardRowControllRemove.svg";

export const CardRowContainer = styled(Box)`
  display: flex;
  height: fit-content;
  width: 320px;
`;

export const CardRowCost = styled(Box)`
  height: 44px;
  width: 55px;
  position: absolute;
  z-index: 10;
  left: 5px;
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
    left: 18px;
    font-size: 26px;
    z-index: 1;
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
  left: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_middle-356a94f18c483c86b6cc02773fda2d345259b428932db41718e7be1873e8a737cd2ae5c58ff7ded8144f81ecb7748f1b1e2e50ad155c993b40d86fa1c3a825ac.png)
    0% 0% / 100% 44px no-repeat;
`;

export const CardRowImage = styled(Box)<Types.ComponentProps>`
  position: absolute;
  z-index: -4;
  width: 150px;
  right: 45px;
  height: 43px;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.image});
`;

export const CardRowMask = styled(Box)`
  position: relative;
  z-index: -1;
  left: 25px;
  width: 250px;
  height: 44px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_mask-23bf424f40855f607e8abbbf8f095325deb6c68d7cbc1aba14919916e386641408fd07a464db21f06e9a61bf62686f893097d75e57916110b5c206c98a822acd.png)
    left center;
  @media only screen and (max-width: 1280px) {
    left: 45px;
  }
`;

export const CardRowFill = styled(Box)`
  position: relative;
  width: 500px;
  height: 44px;
  z-index: -1;
  left: 25px;
  background-color: rgb(41, 46, 60);
  @media only screen and (max-width: 1280px) {
    left: 45px;
  }
`;

export const CardName = styled(Typography)`
  &.MuiTypography-root {
    height: 100%;
    position: absolute;
    top: 8px;
    left: 20px;
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
  width: 55px;
  height: 44px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/decklist/card_list_right-cc4f9b7f9f64ddf99755527449897fa91a5d699b6aa8f12ad79bfdb04113c49d92a4d7c9c1689b1373459393410b19c29da235465833f5c51f0b026f3737eb2b.png)
    0% 0% / 55px 44px no-repeat;
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
    right: 12px;
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

export const CardRowControls = styled(Box)`
  width: 400px;
  height: 29.4px;
  position: relative;
  right: 27px;
  top: 7.4px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  border-left: 2px solid rgb(98, 98, 98);
  z-index: 3;
  opacity: 0;
  transform: translate3d(-150%, 0px, 0px);
  transition: all 0.085s ease-out 0s;
  @media only screen and (max-width: 1280px) {
    right: 5px;
  }
`;

export const CardRowControlInfoButton = styled.button`
  height: 34px;
  width: 33.33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  background: transparent;
  border: none;
`;

export const CardRowControlAddButton = styled.button<Types.ButtonProps>`
  height: 34px;
  width: 33.33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  border: none;
  border-left: 1px solid rgb(98, 98, 98);
  ${(props) =>
    props.$count
      ? "cursor: unset;svg {fill: rgb(93, 93, 93);}:hover {svg {fill: rgb(93, 93, 93);}}"
      : "cursor: pointer;svg {fill: rgb(252, 209, 68);}:hover {svg {fill: white;}}"}
`;

export const CardRowControlRemoveButton = styled.button`
  height: 34px;
  width: 33.33%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: transparent;
  border: none;
  cursor: pointer;
  border-left: 1px solid rgb(98, 98, 98);
  :hover {
    svg {
      fill: white;
    }
  }
`;

export const ControlInfoIcon = styled(ControlInfoImage)`
  fill: rgb(252, 209, 68);
  width: 20px;
  :hover {
    fill: white;
  }
`;

export const ControlAddIcon = styled(ControlAddImage)`
  fill: rgb(252, 209, 68);
  width: 20px;
`;

export const ControlRemoveIcon = styled(ControlRemoveImage)`
  fill: rgb(252, 209, 68);
  width: 20px;
`;

export const CardPreview = styled(Box)<Types.CardPreviewProps>`
  position: absolute;
  right: 400px;
  width: 240px;
  top: ${(props) => props.$yHeight - 130}px;
  height: 340px;
`;

export const CardImage = styled.img`
  width: 240px;
  height: 340px;
`;
