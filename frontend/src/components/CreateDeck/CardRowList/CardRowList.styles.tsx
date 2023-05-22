import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  position: absolute;
  width: 365px;
  height: 530px;
  top: 134px;
  left: 22px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: hsl(60 100% 20%/1);
    border-radius: 10px;
    background-clip: content-box;
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(55 100% 50%/1);
  }
`;

export const GridItem = styled(Box)`
  height: fit-content;
`;
