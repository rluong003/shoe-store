import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "@material-ui/core/";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  },
  links: {
    paddingRight: "30px"
  }
}));

const mapStateToProps = createStructuredSelector({
  curUser: selectCurrentUser,
  hidden: selectCartHidden
});

// eslint-disable-next-line react/prop-types
function ButtonAppBar({ curUser, hidden }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar color="transparent" position="sticky">
        <Toolbar>
          <Link component={RouterLink} to="/" color="inherit" underline="none">
            <h2> L&Q Shoes </h2>
          </Link>
          <Typography align="center" variant="h6" className={classes.title}>
            <Link
              component={RouterLink}
              to="/shop"
              className={classes.links}
              color="inherit"
              underline="none"
            >
              Men
            </Link>
            <Link
              component={RouterLink}
              to="/shop"
              className={classes.links}
              color="inherit"
              underline="none"
            >
              Women
            </Link>
            <Link
              component={RouterLink}
              to="/acessories"
              color="inherit"
              underline="none"
            >
              Accessories
            </Link>
          </Typography>
          {curUser !== null ? (
            <Button onClick={() => auth.signOut()} color="inherit">
              Log Out
            </Button>
          ) : (
            <Button
              component={RouterLink}
              to="/registration-login"
              color="inherit"
            >
              Login
            </Button>
          )}
          <CartIcon />
        </Toolbar>
        {hidden ? null : <CartDropdown />}
      </AppBar>
    </div>
  );
}
export default connect(mapStateToProps)(ButtonAppBar);
