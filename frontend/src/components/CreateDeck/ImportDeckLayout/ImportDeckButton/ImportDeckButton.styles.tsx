import styled from "styled-components";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

export const ImportDeckButton = styled(Button)`
  &.MuiButtonBase-root {
    color: rgb(97, 67, 38);
    font-family: "BelweBoldBT";
    text-transform: none;
    font-size: 16px;
    height: 54px;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_middle_stretch-b4d7a6b9617ba5a39daa4055174b483c4e2963f28fc0d16857f0603bf95218a75968c9d6672f8fa01f979cb372bc3eac84f07c91b73afe0b109d7f424102b22c.png);
  }
`;

export const ImportDeckButtonContainer = styled(Box)`
  display: flex;
  right: -10px;
  z-index: 1;
`;

export const LeftImportDeckButtonLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_left-e13ea6f6636ed54f41135d277e2f6ef7be483a670e3612745f087e9c2cb1040934ac8b1f08fb884cde36102fa16c4a34a887daf88382abba0c14b5463a1c5a69.png);
  width: 24px;
  height: 54px;
`;

export const RightImportDeckButtonLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/dropdown_right-c01d7da8270c3c49674ae17a03e11456d668846c64594e38191ddb64ab28af7eb5babe8fbfd5b1c52a44b9253b954cd6ce31daca74174a0c19f346e300871ca7.png);
  width: 24px;
  height: 54px;
`;
