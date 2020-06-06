import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import useStyle from "./Login.styles";

const validationNames = {
  required: "This field is required",
  incorrectValue: "Incorrect login or password",
};

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
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const onChange = ({ name, value }) => {
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];

      setErrors(newErrors);
    }

    setForm({ ...form, [name]: value });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.paper} elevation={3} variant="outlined">
        <Typography variant="h6" gutterBottom>
          Sign In
        </Typography>
        <form
          className={classes.form}
          onSubmit={e => {
            setErrors({});
            e.preventDefault();
            const validateErrors = validate(form);

            if (Object.keys(validateErrors).length) {
              setErrors(validateErrors);
            } else {
              if (form.username === "admin" && form.password === "admin") {
                console.log("good, now redirect");
              } else {
                setErrors({
                  username: validationNames.incorrectValue,
                  password: validationNames.incorrectValue,
                });
              }
            }
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                onChange={({ target }) => onChange(target)}
                value={form.userName}
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
                onChange={({ target }) => onChange(target)}
                value={form.password}
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
