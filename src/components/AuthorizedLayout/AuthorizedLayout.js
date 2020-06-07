import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { setToken } from "utils/authentication";

import useStyle from "./AuthorizedLayout.styles";

const AuthorizedLayout = ({ children }) => {
  const history = useHistory();
  const classes = useStyle();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" noWrap>
            Home
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              setToken("");
              history.push("/login");
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
