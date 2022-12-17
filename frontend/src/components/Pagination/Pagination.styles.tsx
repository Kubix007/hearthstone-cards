import { Grid } from "@mui/material";
import styled from "styled-components";
import { Box, InputBase, Select, Typography, MenuItem } from "@mui/material";
import { SelectProps } from "./Pagination.types";

export const Container = styled(Grid)``;

export const LeftListLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_left-e13ea6f6636ed54f41135d277e2f6ef7be483a670e3612745f087e9c2cb1040934ac8b1f08fb884cde36102fa16c4a34a887daf88382abba0c14b5463a1c5a69.png);
  width: 28px;
  height: 54px;
`;

export const RightListLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_right-c01d7da8270c3c49674ae17a03e11456d668846c64594e38191ddb64ab28af7eb5babe8fbfd5b1c52a44b9253b954cd6ce31daca74174a0c19f346e300871ca7.png);
  width: 28px;
  height: 54px;
`;

export const SelectClass = styled(Select)<SelectProps>`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_middle_stretch-b4d7a6b9617ba5a39daa4055174b483c4e2963f28fc0d16857f0603bf95218a75968c9d6672f8fa01f979cb372bc3eac84f07c91b73afe0b109d7f424102b22c.png);
  width: fit-content;
  height: 54px;
  width: 110px;
  border: none;
`;

export const SelectInput = styled(InputBase)`
  &.MuiInputBase-input {
    border: none;
    padding: 0px;
  }
`;

export const SelectName = styled(Typography)`
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
`;

export const SelectMenuItem = styled(MenuItem)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png);
`;

export const InfoLabel = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweMediumBT;
    color: rgb(97, 67, 38);
    align-self: center;
  }
`;
