import { Box } from "@mui/material";
import styled from "styled-components";

export const CopyDeckMenuContainer = styled(Box)`
  z-index: 10000;
  min-width: 150px;
  max-height: 500px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_middle.a5d2539fa7fc8c29fcc0a304710f97e9.png)
    center center repeat;
  width: 345px;
  left: 32px;
  bottom: 100px;
  position: relative;
`;

export const CopyDeckMenuTopBorder = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_top_middle.851d4f8c10483727eb80a1262afc175b.png)
    center top repeat-x;
  position: absolute;
  top: -10px;
  left: 0px;
  width: 345px;
  height: 50px;
`;

export const CopyDeckMenuLeftTopBorder = styled(Box)`
  content: "";
  position: absolute;
  top: -10px;
  z-index: 2;
  left: -6px;
  height: 50px;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_top_left.0205d100732abd7f9b7db8c8394ec54a.png)
    center top no-repeat;
`;

export const CopyDeckMenuRightTopBorder = styled(Box)`
  content: "";
  position: absolute;
  top: -10px;
  z-index: 2;
  right: -6px;
  height: 50px;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_top_right.7c9766e2e3056914b44055ec37758798.png)
    center top no-repeat;
`;

export const CopyDeckMenuLeftBorder = styled(Box)`
  content: "";
  position: absolute;
  top: 0px;
  left: -6px;
  height: 100%;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_left.eb6486b5f755125068188f1401b2d587.png)
    left center repeat-y;
`;

export const CopyDeckMenuLeftBottomBorder = styled(Box)`
  content: "";
  position: absolute;
  bottom: -20px;
  left: -6px;
  height: 50px;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_bottom_left.a9f65ff89bff404fe6954a71eb7fdf1f.png)
    center top no-repeat;
`;

export const CopyDeckMenuBottomBorder = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_bottom_middle.3f5f095327a7d569f849389372b67c19.png)
    center top repeat-x;
  position: absolute;
  bottom: -20px;
  left: 40px;
  width: 300px;
  height: 50px;
`;

export const CopyDeckMenuRightBorder = styled(Box)`
  content: "";
  position: absolute;
  top: 0px;
  right: -6px;
  height: 100%;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_middle_right.89ae50d22556f46fb0c5cf5a8f3ec181.png)
    left center repeat-y;
`;

export const CopyDeckMenuRightBottomBorder = styled(Box)`
  content: "";
  position: absolute;
  bottom: -20px;
  z-index: 2;
  right: -6px;
  height: 50px;
  width: 50px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_dropdownmenu_bottom_right.17d693f3aad9c9d14a3a1d4b084c6c74.png)
    center top no-repeat;
`;
