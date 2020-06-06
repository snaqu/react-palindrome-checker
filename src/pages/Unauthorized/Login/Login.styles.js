import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    paddingTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    padding: theme.spacing(3),
  },
}));
