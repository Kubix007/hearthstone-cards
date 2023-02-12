import { Box, Grid } from "@mui/material";
import styled from "styled-components";

export const ImportDeckLayout = styled(Grid)`
  &.MuiGrid-root {
    display: flex;
    width: fit-content;
    position: relative;
    top: -110px;
    align-self: center;
  }
`;

export const LeftDecoration = styled(Box)`
  background-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckInputLeft-ee85011a5247af43c2217fe97c4ef9c4ce6e192e59a6dc28e24686793965684ab1aff180e9a6f08744978c91755ba3659dbb1c557c7c98029fba64749d6ad39a.png);
  left: 0px;
  width: 64px;
  height: 56px;
  transform: translateX(-63px);
`;

export const RightDecoration = styled(Box)`
  background-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckInputRight-fb1f5771a319e9e856af1e48b2e0937fbd1cdeddb5b6728eda511ebf3c5bb3d24aa1f561a184b6f1aba5d089b12a1b8fdb17a3be1c330ff5ba10cc404d01426f.png);
  width: 58px;
  height: 56px;
`;
