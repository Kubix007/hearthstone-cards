import styled from "styled-components";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export const CloseButton = styled(Button)`
  &.MuiButton-root {
    font-size: 36px;
    color: rgb(252, 209, 68);
    z-index: 100002;
    pointer-events: all;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const Content = styled(DialogContent)`
  &.MuiDialogContent-root {
    margin: 50px;
  }
`;

export const Title = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    display: flex;
    justify-content: flex-end;
  }
`;

export const DialogContainer = styled(Dialog)`
  & .MuiDialog-paperFullScreen {
    background-color: rgb(0, 0, 0, 0.8);
    color: white;
  }
`;
