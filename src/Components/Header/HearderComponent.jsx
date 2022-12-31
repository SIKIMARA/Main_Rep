import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import NavbarComponent from "./NavbarComponent";
import Dashboard1 from "../Dashboard1";
import Sidenav from "./Sidenav";
import Acceuil from "../Acceuil/Acceuil";
import Dashboard from "../BodyComponent/Dashboard/Dashboard";

import ListeNoirs from "../BodyComponent/ListeNoirs";
import ListeFavoris from "../BodyComponent/ListeFavoris";
import Marques from "../BodyComponent/Marques";
import Offres from "../BodyComponent/Offres";
import Locataire from "../BodyComponent/Dashboard/Locataire";
import Categories from "../BodyComponent/Categories";
import Reservations from "../BodyComponent/Reservations";
import Footer from "../Footer";
import Header from "./Header";

export default function HearderComponent() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Acceuil />} />
        <Route exact path="/Dashboard/" render={() => <Dashboard1 />} />
        <Route
          exact
          path="/Dashboard/utilisateurs"
          render={() => <Dashboard1 />}
        />
        <Route
          exact
          path="/Dashboard/dashboard"
          render={() => <Dashboard1 />}
        />

        <Route
          exact
          path="/Dashboard/ListeNoirs"
          render={() => <Dashboard1 />}
        />
        <Route
          exact
          path="/Dashboard/ListeFavoris"
          render={() => <Dashboard1 />}
        />
        <Route exact path="/Dashboard/Marques" render={() => <Dashboard1 />} />
        <Route exact path="/Dashboard/Offres" render={() => <Dashboard1 />} />
        <Route
          exact
          path="/Dashboard/Categories"
          render={() => <Dashboard1 />}
        />
        <Route
          exact
          path="/Dashboard/Reservations"
          render={() => <Dashboard1 />}
        />
      </Switch>
      <Footer></Footer>
    </Fragment>
  );
}
