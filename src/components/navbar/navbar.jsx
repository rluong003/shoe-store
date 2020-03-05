import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core/";
import {Link as RouterLink } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line react/prop-types
export default function ButtonAppBar({currentUser}) {
  const classes = useStyles();
  const {curUser} = currentUser;
  return (
    <div className={classes.root}>
      <AppBar color='primary' position="fixed">
        <Toolbar >
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <h2> L&Q Shoes </h2>
          </Link>
          <Typography align="center" variant="h6" className={classes.title}>
            <Link component={RouterLink} to="/"  className={classes.links} color="inherit" underline="none">
              Men
            </Link>
            <Link component={RouterLink} to="/"  className={classes.links} color="inherit" underline="none">
              Women
            </Link>
            <Link component={RouterLink} to="/acessories" color="inherit" underline="none">
              Accessories
            </Link>
          </Typography>
            {curUser !== null ? 
           (<Button onClick={() => auth.signOut()} color="inherit">Log Out</Button>) :
            (<Button component={RouterLink} to="/registration-login" color="inherit">Login</Button>)
            }
        </Toolbar>
      </AppBar>
    </div>
  );
}
