import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import locationVoiture from "../../Images/transparentvw.png";
import DrawerComp from "./DrawerComp";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#ffffff" }}>
        <Toolbar>
          <img
            src={locationVoiture}
            style={{ width: "150px", height: "50px" }}
          />
          {isMatch ? (
            <>
              <Typography
                sx={{ fontSize: "2rem", paddingLeft: "10%" }}
              ></Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto", color: "black" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Acceuil" />
                <Tab label="Voitures" />
                <Tab label="Locataire" />
                <Tab label="Proprietaire" />
              </Tabs>
              <Button
                style={{ backgroundColor: "#000" }}
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                Login
              </Button>
              <Button
                style={{ backgroundColor: "#000" }}
                sx={{ marginLeft: "10px" }}
                variant="contained"
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
