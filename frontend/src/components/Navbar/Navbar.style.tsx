import styled from "styled-components";
import { Drawer } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavbarDrawer = styled(Drawer)`
  width: 30vh;
  & .MuiDrawer-paper {
    width: 30vh;
  }
`;

export const NavbarLink = styled(NavLink)`
  border-bottom: 4px solid;
  border-bottom-color: transparent;
  &:hover {
    border-bottom: 4px solid #fcd144;
  }
`;
