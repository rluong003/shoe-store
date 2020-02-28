import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { palette } from "@material-ui/system";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
   
  },
  links:{
    paddingRight: "30px"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color='white' position="fixed">
        <Toolbar >
          <Link href="/" onClick="" color="inherit" underline="none">
            <h2> L&Q Shoes </h2>
          </Link>
          <Typography align="center" variant="h6" className={classes.title}>
            <Link className={classes.links} href="/" onClick="" color="inherit">
              Men
            </Link>
            <Link className={classes.links} href="/" onClick="" color="inherit">
              Women
            </Link>
            <Link className={classes.links} href="/" onClick="" color="inherit">
              Accessories
            </Link>
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
