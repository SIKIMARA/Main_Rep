import React from "react";
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./HeaderStyle";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import locationVoiture from "../../Images/transparentvb.png";
import PersonIcon from "@material-ui/icons/Person";

export default function NavbarComponent({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Box
          component="img"
          src={locationVoiture}
          sx={{
            height: 53,
            width: 150,
          }}
        ></Box>
        <Hidden smDown>
          <Box component="text">ESPACE ADMINISTRATEUR</Box>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
