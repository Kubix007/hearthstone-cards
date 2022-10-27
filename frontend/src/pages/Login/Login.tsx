import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { AppDispatch, RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import * as Styles from "./Login.style";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("*Wprowadź prawidłowy adres email")
    .required("*Pole wymagane"),
  password: yup
    .string()
    .min(8, "*Hasło musi składać się z minimum 8 znaków")
    .required("*Pole wymagane"),
});

const Login = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    if (isSuccess) {
      toast.success("Pomyślnie zalogowano");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userData = {
        email: values.email,
        password: values.password,
      };
      dispatch(login(userData));
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://d2q63o9r0h0ohi.cloudfront.net/_next/static/images/default-4fff3c606c794dc03a915b9071f562d3.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        style={{ backgroundColor: "#e8d5a8" }}
        component={Paper}
        elevation={6}
        square
      >
        <Styles.LoginHeader />
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styles.LoginLabel variant="h5">Logowanie</Styles.LoginLabel>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              style={{
                backgroundColor: "white",
              }}
              InputLabelProps={{
                style: { fontFamily: "BelweBoldBT" },
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adres email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              style={{ backgroundColor: "white" }}
              InputLabelProps={{
                style: { fontFamily: "BelweBoldBT" },
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Hasło"
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Styles.ButtonLogin
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zaloguj sie
            </Styles.ButtonLogin>
            <Grid container justifyContent="center">
              <Grid item>
                <Styles.LoginLink
                  variant="body2"
                  onClick={() => navigate("/register")}
                >
                  {"Nie posiadasz konta? Zarejestruj się"}
                </Styles.LoginLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
