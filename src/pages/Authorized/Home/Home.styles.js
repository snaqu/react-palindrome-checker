import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export default makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
  },
  listIconPositive: {
    color: green[400],
  },
  listIconNegative: {
    color: red[400],
  },
}));
