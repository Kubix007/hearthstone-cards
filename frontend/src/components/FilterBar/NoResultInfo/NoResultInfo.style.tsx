import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

export const NoResultInfoContainer = styled(Grid)`
  box-sizing: border-box;
  display: block;
  width: 100%;
  text-align: center;
`;

export const ImageContainer = styled(Grid)`
  margin: 0px auto -60px;
  width: 296px;
  height: 288px;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/cardgallery_empty_keyart-087e770b5f99c63fe84ae21c0c412d1b9c91c86ecd8f7635d7e1ec895b1f3f2eebc20fe12192522b2d991b34393b169e8c6780f0cc88387be0397ca75099e786.png)
    center center no-repeat;
  position: relative;
  z-index: 1;
`;

export const TopBackground = styled(Grid)`
    width: 100%;
    height: 34px;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/ui/divider-double-detailed-93ef45548a2f3d93bb7d53152ec7b98a71cba0c1a885f653bf42de28022ba3faf4e2978bb21c6f9b9286414070d4c486ec49f5b0304bd6247d4074f7984d6955.png) center center no-repeat;
}
`;

export const BottomBackground = styled(Grid)`
    margin-top: 25px;
    width: 100%;
    height: 3px;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/esports/tournament/Line-cbab28e3d692bd61adf6a4e3942fc15189fb7c69a2fb7acbc9ed03071e71ab9c665eb73b93a1f1cce961b717d41649939221f1e50f2814def2ff27016b6dfac8.png) center center no-repeat;
}
`;

export const TextInfoContainer = styled(Grid)``;

export const HeaderInfo = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    color: rgb(97, 67, 38);
    font-size: 20px;
    margin-top: 25px;
  }
`;

export const DetailsInfo = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweLightBT;
    color: rgb(97, 67, 38);
    font-size: 20px;
    margin-top: 25px;
  }
`;
