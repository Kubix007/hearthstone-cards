import { useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../app/store";
import { toast } from "react-toastify";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Link,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import * as yup from "yup";
import * as Styles from "./Register.style";

const validationSchema = yup.object({
  login: yup
    .string()
    .min(4, "*Nazwa użytkownika musi składać się z minimum 4 znaków")
    .required("*Pole wymagane"),

  email: yup
    .string()
    .email("*Wprowadź prawidłowy adres email")
    .required("*Pole wymagane"),
  password: yup
    .string()
    .min(8, "*Hasło musi składać się z minimum 8 znaków")
    .required("*Pole wymagane")
    .test("passwords-match", "*Różne hasła", function (value) {
      return this.parent.passwordRepeat === value;
    }),
  passwordRepeat: yup
    .string()
    .min(8, "*Hasło musi składać się z minimum 8 znaków")
    .required("*Pole wymagane")
    .test("passwords-match", "*Różne hasła", function (value) {
      return this.parent.password === value;
    }),
});

const Register = () => {
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
      toast.success("Pomyślnie stworzono konto");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      passwordRepeat: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const userData = {
        login: values.login,
        email: values.email,
        password: values.password,
        passwordRepeat: values.passwordRepeat,
      };
      dispatch(register(userData));
    },
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Grid component="main" sx={{ height: "100vh" }}>
      <Styles.RegisterHeader />
      <Container maxWidth="xs">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Styles.Registerlabel variant="h5">Rejestracja</Styles.Registerlabel>
          <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
            <Styles.RegisterTextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Nazwa użytkownika"
              name="login"
              value={formik.values.login}
              onChange={formik.handleChange}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
            />
            <Styles.RegisterTextField
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
            <Styles.RegisterTextField
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
            <Styles.RegisterTextField
              margin="normal"
              required
              fullWidth
              name="passwordRepeat"
              label="Powtórz hasło"
              type="password"
              id="passwordRepeat"
              value={formik.values.passwordRepeat}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordRepeat &&
                Boolean(formik.errors.passwordRepeat)
              }
              helperText={
                formik.touched.passwordRepeat && formik.errors.passwordRepeat
              }
            />
            <Styles.ButtonRegister
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Zarejestruj sie
            </Styles.ButtonRegister>
            <Grid container justifyContent="center">
              <Grid item>
                <Styles.RegisterLink
                  variant="body2"
                  onClick={() => navigate("/login")}
                >
                  {"Posiadasz już konto? Zaloguj sie"}
                </Styles.RegisterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Grid>
  );
};

export default Register;
