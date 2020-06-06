import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { setUser } from "reducers/user";

import useStyle from "./AuthorizedLayout.styles";

const AuthorizedLayout = ({ children }) => {
  const { userName } = useSelector(({ user }) => user);
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
          <Button color="inherit" onClick={() => dispatch(setUser(""))}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  );
};

AuthorizedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthorizedLayout;
