import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import locationVoiture from "../../Images/transparentvw.png";
import LanguageSwitch from "./LanguageSwitch";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
    color: "#000000",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  logoBrand: { margin: "5px" },
  toolbar: {
    backgroundColor: "#ffffff",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Box
          className={classes.logoBrand}
          component="img"
          src={locationVoiture}
          sx={{
            height: 60,
            width: 150,
          }}
        ></Box>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <LanguageSwitch />
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
