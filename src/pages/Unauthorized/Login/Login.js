import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { setErrors, setValues } from "reducers/login";
import { setUser } from "reducers/user";
import validationNames from "constants/validationNames";
import { setToken } from "utils/authentication";
import uniqueID from "utils/uniqueID";

import useStyle from "./Login.styles";

const validate = form => {
  let errors = {};

  if (!form.username) {
    errors = { ...errors, username: validationNames.required };
  }

  if (!form.password) {
    errors = { ...errors, password: validationNames.required };
  }

  return errors;
};

const Login = () => {
  const classes = useStyle();
  const history = useHistory();
  const { errors, values } = useSelector(({ login }) => login);
  const dispatch = useDispatch();

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper} elevation={3} variant="outlined">
        <Typography variant="h6" gutterBottom>
          Sign In
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            dispatch(setErrors({}));
            e.preventDefault();
            const validateErrors = validate(values);

            if (Object.keys(validateErrors).length) {
              dispatch(setErrors(validateErrors));
            } else {
              // Przy logowaniu powinien iść request do API z danymi logowania do sprawdzenia czy użytkownik o takich danych istnieje
              // oraz czy dane do logowania są prawidłowe. W przypadku nie poprawnych danych - informacja dla użytkownika.
              // Jeżeli użytkownik o podanych danych istnieje API powinno zwrócić np token jwt który będzie przechowywany np w localStorage.
              // token będzie używany później przy każdym zapytaniu do API - w celu sprawdzenia dostępu lub uprawnień.

              // Przechowywanie danych logowania na froncie nie jest bezpieczne, bo można uzyskać do nich dostęp w łatwy sposób.
              // Przez co narażamy się niepowołany dostęp do aplikacji. Poza tym dane musiały by być zawsze synchronizowane ręcznie
              // gdy jakiś użytkownik założy nowe konto.

              if (values.username === "admin" && values.password === "admin") {
                dispatch(setUser(values.username));
                setToken(uniqueID());
                history.push("/home");
              } else {
                dispatch(
                  setErrors({
                    username: validationNames.incorrectValue,
                    password: validationNames.incorrectValue,
                  })
                );
              }
            }
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                onChange={({ target }) => {
                  dispatch(setErrors({}));
                  dispatch(setValues(target));
                }}
                value={values.username}
                error={!!errors.username}
                helperText={errors.username}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                name="password"
                onChange={({ target }) => {
                  dispatch(setErrors({}));
                  dispatch(setValues(target));
                }}
                value={values.password}
                error={!!errors.password}
                helperText={errors.password}
                variant="outlined"
                type="password"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
