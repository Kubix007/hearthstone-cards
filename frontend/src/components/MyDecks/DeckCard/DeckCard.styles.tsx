import { Box } from "@mui/material";
import styled from "styled-components";
import highlightedBorder from "../../../img/MyDecks/highlighted-border.png";
import * as Types from "./DeckCard.types";

export const Container = styled(Box)<Types.IContainerProps>`
  @media only screen and (max-width: 660px) {
    background-size: 300px 75px;
    width: 300px;
    height: 75px;
  }
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 10px 10px);
  width: 600px;
  height: 150px;
  background-size: 600px 150px;
  z-index: 1;
  user-select: none;
  margin-bottom: 30px;
  background-repeat: no-repeat;
  background-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_frame_top_standard_desktop-ce90aa5e2ce5fab42c9fed8cc4869c1fcd4406df47f75f7509e69a92d74b15c546232dd551699e802900f6c2cb0824a08cbf0d20f6ccd783c2d0d83ded9d0114.png);
  &:hover {
    background: url(${highlightedBorder}) no-repeat;
    cursor: pointer;
    background-size: 600px 150px;
  }
`;
