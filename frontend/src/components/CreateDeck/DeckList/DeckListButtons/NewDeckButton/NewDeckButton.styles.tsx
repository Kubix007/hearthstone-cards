import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import { ReactComponent as NewDeckIcon } from "../../../../../img/CreateDeck/NewDeckIcon.svg";

export const CreateNewDeckButton = styled(Button)`
  &.MuiButton-root {
    font-family: BelweBoldBT;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 45%);
    background-image: linear-gradient(
      to right,
      rgb(131, 44, 32),
      rgb(157, 71, 38),
      rgb(131, 44, 32)
    );
    width: 30px;
    height: 35px;
    position: absolute;
    bottom: 6px;
    right: 3px;
    :hover {
      background-image: linear-gradient(rgb(239, 161, 88), rgb(157, 71, 49));
    }
  }
`;

export const CreateNewDeckIcon = styled(NewDeckIcon)`
  fill: white;
`;

export const ButtonContainer = styled(Box)`
  background-image: linear-gradient(180deg, #ededed, #573b23);
  border-radius: 6px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.45);
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.3);
  padding: 5px 20px;
  width: 30px;
  height: 34px;
  position: absolute;
  bottom: 28px;
  right: 35px;
`;

export const NewDeckTooltip = styled(Typography)`
  &.MuiTypography-root {
    font-family: BelweBoldBT;
    font-weight: 400;
    color: white;
  }
`;
