import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

import AuthorizedLayout from "components/AuthorizedLayout";
import palindromes from "constants/palindromes.json";
import { setErrors, setValue, setHistory, clearValue, pushToHistory } from "reducers/home";

import uniqueID from "utils/uniqueID";
import checkPalindrome from "utils/checkPalindrome";

import useStyle from "./Home.styles";

const Home = () => {
  const classes = useStyle();
  const { palindrome, errors, history } = useSelector(({ home }) => home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHistory(palindromes));
  }, []);

  return (
    <AuthorizedLayout>
      <Paper elevation={3} variant="outlined" className={classes.paper}>
        <form
          onSubmit={e => {
            e.preventDefault();
            const isPalindrome = checkPalindrome(palindrome);

            dispatch(clearValue());
            dispatch(
              pushToHistory({
                id: uniqueID(),
                name: palindrome,
                isPalindrome,
              })
            );
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={10}>
              <TextField
                label="Palindrome"
                name="palindrome"
                onChange={({ target }) => {
                  dispatch(setErrors({}));
                  dispatch(setValue(target));
                }}
                value={palindrome}
                error={!!errors.palindrome}
                helperText={errors.palindrome}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid container item xs={2} alignItems="center">
              <Button
                disabled={!palindrome}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                check palindrome
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List dense>
              {history.map(({ id, name, isPalindrome }) => (
                <ListItem key={id}>
                  <ListItemIcon
                    className={isPalindrome ? classes.listIconPositive : classes.listIconNegative}
                  >
                    {isPalindrome ? <Check /> : <Close />}
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </AuthorizedLayout>
  );
};

export default Home;
