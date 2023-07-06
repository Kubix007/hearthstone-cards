import { Box, Button, SwipeableDrawer, Typography } from "@mui/material";
import styled from "styled-components";

export const Drawer = styled(SwipeableDrawer)`
  & .MuiPaper-root {
    position: fixed;
    top: 0px;
    height: 100%;
    width: 300px;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_tabletmobile-f66d0c6366cb3334fc5246473ab8119d0475da02aca45b6883dafd23def2ee874f4cdf148590e2eff13104847e3b7b7e0d3eb105157b952977f96fc1d8dd3ab5.jpg)
      left top repeat-y;
    z-index: 10000;
    overflow-y: auto;
  }
`;

export const Content = styled(Box)`
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 12px 20px 10px 20px;
  box-sizing: border-box;
`;

export const InfoHeader = styled(Box)`
  width: 100%;
`;

export const CardsInfo = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweLightBT;
    margin-left: 4px;
    font-size: 18px;
    color: white;
    text-align: left;
    margin-bottom: 10px;
  }
`;

export const CloseButton = styled(Button)`
  &.MuiButton-root {
    font-family: BelweLightBT;
    font-size: 18px;
    color: white;
    z-index: 100002;
    pointer-events: all;
    cursor: pointer;
    text-align: left;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const CloseIcon = styled.span`
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

export const Filters = styled(Box)`
  width: 100%;
  margin-top: 10px;
`;

export const Sorting = styled(Box)`
  width: 100%;
  margin-top: 10px;
`;
