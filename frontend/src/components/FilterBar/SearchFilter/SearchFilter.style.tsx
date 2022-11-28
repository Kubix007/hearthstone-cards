import styled from "styled-components";
import { Box, Input } from "@mui/material";
import { ReactComponent as SearchIconSvg } from "../../../img/SearchIcon.svg";

export const SearchFilterContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSerachLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_left-3cb561cf585e6b6aded5dca35f8c16b3450db50cf6146e8699bd9a12117eede0b0e437db488e0a499755f2a442229c1c633522a26b08138350140aebab05ec31.png);
  width: 25px;
  height: 54px;
  fill: gold;
`;

export const RightSearchLayout = styled(Box)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_right-9e22f78542b7f45c1fbffb80d6fe8f54bdb3bf5ba2972d0d20ce586b86e5b896a79bd9dd811dd0a846253db72c4821bf53aa0f3ea2add1efec8e374e9a62497d.png);
  width: 25px;
  height: 54px;
`;

export const SearchInput = styled(Input)`
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/card-gallery/search_middle_stretch-ea2c7bde67b73e83e192c5a6a952519dfcad9041f4eada47653141ee06d51a316268240dd2d5cd1b8ba704ce64b213cf824f82c31ac05cc7dcedd5d584d793b9.png);
  height: 54px;
  &.MuiInput-base {
    color: white;
  }
  &.MuiInputBase-input {
    color: white;
  }
  color: white;
`;

export const SearchIcon = styled(SearchIconSvg)`
  fill: gold;
  height: 22px;
`;
