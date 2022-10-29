import styled from "styled-components";
import { Button, Typography, Link, TextField, Grid } from "@mui/material";
import { FormSideProps } from "../Register/Register.types";

export const ButtonLogin = styled(Button)`
  background: url(https://d2vkoy1na2a6o6.cloudfront.net/images/fireside-gatherings/form-button-bg-10bf9ae28b5cf03a69a819cf5856a5dbf41b436433f5e5864e422339f916f25063b18a9d740474d458e76dd71f53083c5c39e2845e13d20a9252305d7d25a01b.jpg);
  &.MuiButton-root {
    font-family: BelweBoldBT;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 45%);
  }
`;

export const LoginLabel = styled(Typography)`
  &.MuiTypography-root {
    background-image: linear-gradient(90deg, #4c0d7a, #b921c4, #4c0d7a);
    font-family: BelweBoldBT;
    color: white;
    border-radius: 6px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 45%);
    text-shadow: 0 0 4px rgb(0 0 0 / 30%), 0 0 8px rgb(0 0 0 / 30%);
    padding: 0.2em 0.5em;
    letter-spacing: 0.85px;
    border: 3px solid #7e5f58;
  }
`;

export const LoginLink = styled(Link)`
  &.MuiLink-root {
    font-family: BelweBoldBT;
    color: black;
    font-size: 18px;
    text-decoration: none;
  }
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const LoginHeader = styled.div`
  width: 100%;
  height: 10%;
  background: url(https://d2q63o9r0h0ohi.cloudfront.net/images/bg_wood_tile.aff07b7098441e60ef43293207da2c2b.jpg);
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 45%);
`;

export const LoginTextField = styled(TextField)`
  &.MuiTextField-root {
    background-color: white;
    > .MuiFormLabel-root {
      font-family: BelweBoldBT;
    }
  }
`;

export const FormSide = styled(Grid)<FormSideProps>`
  &.MuiPaper-root {
    background-color: #e8d5a8;
  }
`;
