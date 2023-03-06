import { Grid } from "@mui/material";
import styled from "styled-components";

export const ContentLayout = styled(Grid)`
  &.MuiGrid-root {
    height: 100%;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    border-style: solid;
    border-width: 139px 121px 141px 166px;
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/bg_class_selector_tile-ed65a642d775c2c3668e96c52faa5a5689231767befd1e393e09c74e1feb73806abc5a49c9fc8d90255fa4d796baff12886fee91fa1e89e41d7611d11487d878.jpg);
    border-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/frame_class_selector-762abc4239b5e09a8f3c97aea6cd90910f9fc54de486d7d1121f46e4d3aff93be2a433110b2e46a09a10453ead3aa1fa8fec6adec6f76d036eae141c4cac0fd8.png)
      139 121 141 166 / 1 / 0 round;
  }
`;

export const PageLayout = styled(Grid)`
  &.MuiGrid-root {
    width: 100%;
    height: 100%;
  }
`;

export const Container = styled.div`
  display: contents;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
