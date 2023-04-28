import { Box } from "@mui/material";
import styled from "styled-components";
import * as Types from "./DeckListGameModeIcon.types";

export const GameModeIcon = styled(Box)<Types.Props>`
  width: 60px;
  height: 65px;
  filter: drop-shadow(rgba(0, 0, 0, 0.75) 0px 1px 1px);
  background: url(${(props) => props.image}) bottom 15px right 35% / 40px
      no-repeat,
    url(https://d2q63o9r0h0ohi.cloudfront.net/images/leaderboards/Button_Normal-45075d53d3ad8b289a59ea854edf8ca3e9def4b8f68a4ed214b2ef4303fcaf374ac3118dd6dd37b10a27f62477c9b4a5a31ba78a09d8b0a614b24e4db00f5706.png)
      center center / 60px no-repeat;
`;
