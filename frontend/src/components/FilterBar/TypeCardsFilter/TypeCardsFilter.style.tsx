import styled from "styled-components";
import { Box, InputBase, Select, Typography, MenuItem } from "@mui/material";
import { Props } from "./TypeCardsFilter.types";

export const TypeCardsFilterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LeftListLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_withicon_left-7e61d9cf269140a30715b8d92e3c1b91c0078012deda8697e6bc771eba6f145bf7b4fa63e3818e2a58fc6195ad8550d9aebaf9dc191a679c5db588a10e709190.png);
  width: 50px;
  height: 54px;
  fill: gold;
`;

export const RightListLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_right-c01d7da8270c3c49674ae17a03e11456d668846c64594e38191ddb64ab28af7eb5babe8fbfd5b1c52a44b9253b954cd6ce31daca74174a0c19f346e300871ca7.png);
  width: 28px;
  height: 54px;
`;

export const LeftListLogo = styled(Box)`
  margin-top: 10px;
  margin-left: 2px;
`;

export const SelectClass = styled(Select)<Props>`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_middle_stretch-b4d7a6b9617ba5a39daa4055174b483c4e2963f28fc0d16857f0603bf95218a75968c9d6672f8fa01f979cb372bc3eac84f07c91b73afe0b109d7f424102b22c.png);
  width: fit-content;
  height: 54px;
  border: none;
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;

export const SelectInput = styled(InputBase)`
  &.MuiInputBase-input {
    border: none;
    padding: 0px;
  }
  h6:first-of-type {
    @media only screen and (max-width: 1150px) {
      display: none;
    }
  }
`;

export const ItemBorderImage = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/frame_class-085ba2295c2ea6ab55ceccd4ddeb084b4a3c782e2e286c960c4bcf4226edbc9b07c77226c3ec87035cf913170b6896407f951b4a4045aad68ca9cd7c9adbec9a.png);
  width: 40px;
  height: 40px;
`;

export const TypeCardName = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(255, 255, 255);
    margin-left: 4px;
    font-size: 14px;
    color: white;
    text-shadow: rgb(0 0 0) 2px 0px 0px, rgb(0 0 0) 1.75517px 0.95885px 0px,
      rgb(0 0 0) 1.0806px 1.68294px 0px, rgb(0 0 0) 0.14147px 1.99499px 0px,
      rgb(0 0 0) -0.83229px 1.81859px 0px, rgb(0 0 0) -1.60229px 1.19694px 0px,
      rgb(0 0 0) -1.97998px 0.28224px 0px, rgb(0 0 0) -1.87291px -0.70157px 0px,
      rgb(0 0 0) -1.30729px -1.5136px 0px, rgb(0 0 0) -0.42159px -1.95506px 0px,
      rgb(0 0 0) 0.56732px -1.91785px 0px, rgb(0 0 0) 1.41734px -1.41108px 0px,
      rgb(0 0 0) 1.92034px -0.55883px 0px;
  }
  &.MuiButtonBase-root {
    &:hover {
      background-color: grey;
    }
  }
`;

export const TypeCard = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    font-size: 14px;
    padding-left: 10px;
    color: rgb(204, 204, 204);
    text-transform: uppercase;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png);
  }
`;

export const SelectMenuItem = styled(MenuItem)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png);
`;
