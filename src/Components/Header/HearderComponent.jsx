import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Sidenav from "./Sidenav";
import Notification from "./ActionTab/Notification";
import BlogPost from "../BodyComponent/BlogPost";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";
import Link1 from "../BodyComponent/Link1";
import ListeNoirs from "../BodyComponent/ListeNoirs";
import ListeFavoris from "../BodyComponent/ListeFavoris";
import Marques from "../BodyComponent/Marques";
import Offres from "../BodyComponent/Offres";
import Locataire from "../BodyComponent/Dashboard/Locataire";
import Categories from "../BodyComponent/Categories";
export default function HearderComponent() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  return (
    <Fragment>
      <NavbarComponent handleDrawerToggle={handleDrawerToggle} />
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/Utilisateurs" render={() => <Locataire />} />
          <Route exact path="/ListeNoirs" render={() => <ListeNoirs />} />
          <Route exact path="/ListeFavoris" render={() => <ListeFavoris />} />
          <Route exact path="/Marques" render={() => <Marques />} />
          <Route exact path="/Offres" render={() => <Offres />} />
          <Route exact path="/Categories" render={() => <Categories />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
