import { Box, Input, Typography } from "@mui/material";
import styled from "styled-components";

export const EmptyContainer = styled(Box)`
  width: 407px;
  height: 50%;
`;

export const EmptyLogo = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/logo_hearthstone_watermark-ff4021bf38ad9e4536254c49b057fb403a51e7fed8c6ebc0d9a3d7ed339552c53336301c2ba55ec4a0d6b1b92d6594794c0be2a6206a8750898a78cf29cc5f86.png)
    center top / cover no-repeat;
  width: 80px;
  height: 100px;
  margin: 0px;
`;

export const EmptyInfo = styled(Typography)`
  &.MuiTypography-root {
    color: rgb(162, 133, 169);
    font-family: BelweBoldBT;
    font-size: 15px;
    margin-bottom: 10px;
    line-height: 1.3em;
    width: 270px;
    text-align: center;
  }
`;

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EmptyDeckInput = styled(Input)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/inputfield_middle-fcd373e6c5098b17e9ff32919340f12cf269c31752dde49a8cf40c41b8bbb4b561ba3061debf9fbcbf5efaa5d074dff68bcafec96265ada45ec644b8526d9453.png);
  height: 52px;
  z-index: 1;
`;

export const LeftSearchLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/inputfield_left-8c3826fd549d6e8270c9ccebb4923be28cb123aa37e1b7523e7a6635d448dffea9856dfc832addd4bf0a46258bae05469907203c06f164c40f9d0ceed32a3327.png);
  width: 36px;
  height: 52px;
`;

export const RightSearchLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/inputfield_right-066f5cd8bc53eca486a2570f13549518aefb62fd63c465b923710faf7264d17480501757ab84d0e2db24694a8351fa7db083832715cd124e4ec1f2bc48a79599.png);
  width: 36px;
  height: 52px;
`;

export const InputContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
