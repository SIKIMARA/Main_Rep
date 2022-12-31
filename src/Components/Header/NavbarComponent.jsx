import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  Box,
  Tab,
  Tabs,
  Button,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import locationVoiture from "../../Images/transparentvw.png";
import LanguageSwitch from "./LanguageSwitch";
import DrawerComp from "./DrawerComp";

const useStyles = makeStyles((theme) => ({
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  toolbar: {},
  logoBrand: { margin: "5px" },
}));

function Navbar() {
  const [value, setValue] = useState();
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
        className={classes.toolbar}
      >
        <Box
          className={classes.logoBrand}
          component="img"
          src={locationVoiture}
          sx={{
            height: 60,
            width: 150,
          }}
        ></Box>
        <Box>
          {isMatch ? (
            <>
              <Typography
                sx={{ fontSize: "2rem", paddingLeft: "10%" }}
              ></Typography>
              <DrawerComp />
            </>
          ) : (
            <div style={{ display: "flex" }}>
              <Tabs
                style={{ marginRight: "30px", color: "black" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab color="black" label="Acceuil" />
                <Tab color="black" label="Espace Voitures" />
                <Tab color="black" label="Espace Locataire" />
                <Tab color="black" label="Espace Proprietaire" />
              </Tabs>
              <Button
                style={{ backgroundColor: "#000", color: "white" }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                style={{
                  backgroundColor: "#000",
                  color: "white",
                  marginLeft: "10px",
                }}
                variant="contained"
              >
                SignUp
              </Button>
            </div>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
