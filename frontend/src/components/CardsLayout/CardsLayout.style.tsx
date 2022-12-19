import styled from "styled-components";
import { Paper } from "@mui/material";

export const Container = styled.div`
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(rgb(255, 255, 255) 0px 0px 15px);
}
  }
`;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  background-color: transparent;
  box-shadow: none;
  &.MuiPaper-root {
    box-shadow: none;
    background: none;
  }
`;

export const Cover = styled.img`
  height: 320px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 3px 3px);
`;
