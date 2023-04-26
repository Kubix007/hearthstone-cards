import { Box, Stack } from "@mui/material";
import styled from "styled-components";

export const DeckListLayout = styled(Stack)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deck_bg-7456c142239cf279362e76d67865d342b52e330912931365349cf61fceacd4bcb9e63cb91adeab45ff020238fda831ceb898d556500088f2bbe31957917ae860.png)
    center top / cover no-repeat;
  height: 713px;
  width: 407px;
  position: sticky;
  top: 8%;
`;

export const DeckListTopBorder = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListTopNoShadowFinal-45eb8e44bf1cabd8eb9a42e540aececaf565c259fc243276039ff50b48620b57b824b55900ce91702a14902a9904220554b132a3a16ffe7f6b8760d251570c78.png)
    center top / cover no-repeat;
  display: block;
  position: relative;
  height: 0px;
  padding-bottom: 34.975%;
`;

export const DeckListCenterBorder = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListMiddleNoShadow-4cb94d99b774cd234e118726b87e0bde71890f51fbf2b808a358a68854f7be2762362d11edef1e84e5ef93390ebc5bb4c54864e31cb89b6cdf8f0e2f59fb7084.png)
    center center / 100% repeat-y;
  height: 100%;
  overflow: hidden;
`;

export const DeckListBottomBorder = styled(Box)`
  width: 407px;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/deckbuilder/deckListBottomNoShadowFinal-766a1f9dfc4971650620f73e67d08307a60f36be5794bcdf872f391a7dbff3ad286fa0b24dbb9e8f5c7490807dcd7b8d9d857b54accfc5fc8f0450b56e3e55ce.png)
    center bottom / 100% 110px no-repeat;
  position: absolute;
  bottom: -90px;
`;
