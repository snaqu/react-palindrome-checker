import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  main: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(8),
  },
}));
