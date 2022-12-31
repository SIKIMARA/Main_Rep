import React, { Fragment } from "react";
import { useStyles } from "../BodyComponent/BodyStyles";
import Sidenav from "../Header/Sidenav";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import Locataire from "./Locataire";
import Profile from "./Profile";

export default function Dashboard1() {
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
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path="/Locataire/" render={() => <Locataire />} />
          <Route
            exact
            path="/Locataire/locataire"
            render={() => <Locataire />}
          />
          <Route exact path="/Locataire/Profile" render={() => <Profile />} />
        </Switch>
      </Box>
    </Fragment>
  );
}
