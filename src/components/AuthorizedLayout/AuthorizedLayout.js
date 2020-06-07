import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { setUser } from "reducers/user";
import { setToken } from "utils/authentication";

import useStyle from "./AuthorizedLayout.styles";

const AuthorizedLayout = ({ children }) => {
  const { userName } = useSelector(({ user }) => user);
  const history = useHistory();
  const classes = useStyle();
  const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap>
            Hello, {userName}
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              dispatch(setUser(""));
              setToken("");
              history.push("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>{children}</main>
    </>
  );
};

AuthorizedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedLayout;
