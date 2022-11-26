import styled from "styled-components";
import { Box } from "@mui/material";

export const TopBarContainer = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_top_tile-2fc1e6f76b820b6c4134c00256a3c6210296b44f0e704fc3df57489c18a1ce91bb35b7ecd693c8d4b5c497c751f32e530105028ba52a88a7f13f8879ec342294.png);
  width: 100%;
  height: 20px;
`;

export const BottomBarContainer = styled(Box)`
  background: url("https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_bottom_tile-fe6e278438831fdcb9e897c1d90882eadf1c9c9edb05f9e729b8678c3da8ce386e4a5a03200d943c64837e7d113a8345b8424d05b7906570dde191e3eab8b4dd.png");
  position: absolute;
  bottom: -15px;
  height: 60px;
  width: 100%;
}
`;

export const FiltersContainer = styled(Box)`
  display: flex;
  justify-content: center;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/bg_filter_middle_tile-907853600f2b8dc11ae3acca94ff309f58b4959f380a6995e1b69b2d94f4bae5811b3ec588d56290599d59ddf6d00f0ce3fa9087c08ee8f7eabe843ed3646f9d.jpg);
  width: 100%;
  height: 90px;
`;

export const Container = styled(Box)`
  margin-bottom: 20px;
  width: 100%;
`;
