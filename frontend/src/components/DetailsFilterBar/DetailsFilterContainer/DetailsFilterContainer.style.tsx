import styled from "styled-components";
import { Box } from "@mui/material";

export const DetailsFilterContainer = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_middle_tile-907853600f2b8dc11ae3acca94ff309f58b4959f380a6995e1b69b2d94f4bae5811b3ec588d56290599d59ddf6d00f0ce3fa9087c08ee8f7eabe843ed3646f9d.jpg);
  width: 100%;
  height: 80px;
  filter: drop-shadow(rgba(0, 0, 0, 0.6) 0px 6px 6px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1700px) {
    height: fit-content;
  }
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;
