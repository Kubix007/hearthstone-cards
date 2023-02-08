import { Grid } from "@mui/material";
import * as Types from "./PageHeader.types";
import styled from "styled-components";

export const PageHeaderContainer = styled(Grid)<Types.IPageHeaderProps>`
  &.MuiGrid-root {
    height: 300px;
    content: "";
    background-image: url(${(props) => props.backgroundimg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
