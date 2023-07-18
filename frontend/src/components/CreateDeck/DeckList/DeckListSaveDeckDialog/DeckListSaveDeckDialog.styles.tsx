import { Dialog, DialogTitle } from "@mui/material";
import styled from "styled-components";

export const DialogContainer = styled(Dialog)`
  & .MuiPaper-root {
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_class_selector_tile-ed65a642d775c2c3668e96c52faa5a5689231767befd1e393e09c74e1feb73806abc5a49c9fc8d90255fa4d796baff12886fee91fa1e89e41d7611d11487d878.jpg);
    border-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/frame_class_selector-762abc4239b5e09a8f3c97aea6cd90910f9fc54de486d7d1121f46e4d3aff93be2a433110b2e46a09a10453ead3aa1fa8fec6adec6f76d036eae141c4cac0fd8.png)
      139 121 141 166 / 1 / 0 round;
    border-style: solid;
    border-width: 20px 30px 30px 30px;
  }
`;

export const Title = styled(DialogTitle)`
  &.MuiDialogTitle-root {
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
    @media only screen and (max-width: 390px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 345px) {
      font-size: 14px;
    }
    @media only screen and (max-width: 320px) {
      font-size: 10px;
    }
  }
`;

export const ButtonIcon = styled.span`
  font-size: 18px;
  color: rgb(252, 209, 68);
  z-index: 100002;
  margin-right: 5px;
  pointer-events: all;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;
