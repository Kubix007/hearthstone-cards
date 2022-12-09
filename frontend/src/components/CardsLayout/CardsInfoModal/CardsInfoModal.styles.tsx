import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const Title = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    margin-left: 15px;
    margin-right: 15px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
`;

export const Description = styled(Typography)`
  &.MuiTypography-root {
    margin-left: 15px;
    margin-right: 15px;
    font-family: BelweMediumBT;
    color: rgb(255, 255, 255);
    font-size: 14px;
    color: white;
  }
`;

export const TextWrapper = styled(Box)`
  width: 228px;
  text-align: left;
  z-index: 1;
  width: 228px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/npe/cards/tooltip_npe_cards_mid-e3b03bb8c3d7d955cf81f4f8b643f6916eb659924c10d3ff27debabe1587ed77ef28667d00ddd2d459962258b99fb66ef419ab9c28fe909bafe96fd1652289a4.png)
    transparent;
  overflow: hidden;
`;

export const ModalContainer = styled(Box)`
  padding-top: 5px;
  overflow: hidden;
  top: -20px;
`;

export const TopBorder = styled(Box)`
  width: 228px;
  height: 20px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/npe/cards/tooltip_npe_cards_top-1bf6a5f3405fca516dec1f9fde4fa808d874a8c4ffc2b7e2e2be081900675b44be25af60f1c9da65953d563f18e24fa7ce67a3372dfa836da0ced92bec13828e.png)
    transparent;
  content: "";
  overflow: hidden;
`;

export const BottomBorder = styled(Box)`
  width: 228px;
  height: 70px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/npe/cards/tooltip_npe_cards_bottom-684b80a9a236998d1a378d66163cd0cbe3f9f03b1c0435f5592695f4c5f16fece788decf731aa4809f6a7591fd3ed05f31ad61e873347e9746b70478d3567297.png)
    transparent;
  margin-top: -45px;
  overflow: hidden;

  content: "";
`;
