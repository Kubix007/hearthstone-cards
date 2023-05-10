import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const DeckListLayout = styled(Stack)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deck_bg-7456c142239cf279362e76d67865d342b52e330912931365349cf61fceacd4bcb9e63cb91adeab45ff020238fda831ceb898d556500088f2bbe31957917ae860.png)
    center top / cover no-repeat;
  height: 670px;
  width: 407px;
  position: sticky;
  top: 8%;
  margin-left: 20px;
`;

export const DeckListTopBorder = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListTopNoShadowFinal-45eb8e44bf1cabd8eb9a42e540aececaf565c259fc243276039ff50b48620b57b824b55900ce91702a14902a9904220554b132a3a16ffe7f6b8760d251570c78.png)
    center top / cover no-repeat;
  display: block;
  position: relative;
  height: 175px;
`;

export const DeckTitleContainer = styled(Box)``;

export const DeckTitleArrow = styled(Box)``;

export const DeckTitleBorder = styled(Box)`
  position: absolute;
  top: 12px;
  left: 21.9px;
  width: 365px;
  height: 110px;
  z-index: 1;
  background-repeat: no-repeat;
  background-image: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_frame_top_standard_desktop-ce90aa5e2ce5fab42c9fed8cc4869c1fcd4406df47f75f7509e69a92d74b15c546232dd551699e802900f6c2cb0824a08cbf0d20f6ccd783c2d0d83ded9d0114.png);
  &:hover {
    background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_standard_frame_hover-f07a0f3d5dfed8f955695277a5b4252da741b427f11635f155d87263e2034aa472108ef146cede8808c4b851337c2eca83001dfe28aecdb141012c02e07d0c3d.png)
        center center no-repeat,
      url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckbuilder_frame_top_standard_desktop-ce90aa5e2ce5fab42c9fed8cc4869c1fcd4406df47f75f7509e69a92d74b15c546232dd551699e802900f6c2cb0824a08cbf0d20f6ccd783c2d0d83ded9d0114.png)
        no-repeat;
    cursor: pointer;
  }
`;

export const DeckTitleBackground = styled(Box)``;

export const DeckListCenterBorder = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListMiddleNoShadow-4cb94d99b774cd234e118726b87e0bde71890f51fbf2b808a358a68854f7be2762362d11edef1e84e5ef93390ebc5bb4c54864e31cb89b6cdf8f0e2f59fb7084.png)
    center center / 100% repeat-y;
  height: 650px;
  justify-content: center;
`;

export const DeckListBottomBorder = styled(Box)`
  width: 407px;
  height: 100px;
  display: flex;
  flex-direction: row;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListBottomNoShadowFinal-766a1f9dfc4971650620f73e67d08307a60f36be5794bcdf872f391a7dbff3ad286fa0b24dbb9e8f5c7490807dcd7b8d9d857b54accfc5fc8f0450b56e3e55ce.png)
    center bottom / 100% 110px no-repeat;
  position: absolute;
  bottom: -90px;
`;
