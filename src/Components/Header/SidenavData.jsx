import React from "react";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyle";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import DashboardIcon from "@material-ui/icons/Dashboard";
import RedeemIcon from "@material-ui/icons/Redeem";
import FavoriteIcon from "@material-ui/icons/Favorite";
import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ViewAgendaIcon from "@material-ui/icons/ViewAgenda";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
export default function SidenavData({ handleDrawerClose }) {
  const classes = useStyles();
  const listItemData = [
    { label: "Dashboard", link: "/", icon: <DashboardIcon /> },

    {
      label: "Utilisateurs",
      link: "/Utilisateurs",
      icon: <PersonIcon></PersonIcon>,
    },
    {
      label: "Liste Noire",
      link: "/ListeNoirs",
      icon: <SentimentVeryDissatisfiedIcon />,
    },
    {
      label: "Liste Favoris",
      link: "/ListeFavoris",
      icon: <FavoriteIcon />,
    },
    {
      label: "Offres",
      link: "/Offres",
      icon: <RedeemIcon />,
    },
    {
      label: "Marques",
      link: "/Marques",
      icon: <DirectionsCarIcon />,
    },
    {
      label: "Categories",
      link: "/Categories",
      icon: <ViewAgendaIcon />,
    },
    {
      label: "Reserrvations",
      link: "/Reservations",
      icon: <BookIcon />,
    },
    { label: "logout", link: "/logout", icon: <ExitToAppIcon /> },
  ];

  return (
    <List>
      {listItemData.map((item, i) => (
        <Button
          size="small"
          onClick={() => handleDrawerClose()}
          className={classes.navButton}
        >
          <ListItem
            exact
            key={i}
            component={NavLink}
            to={item.link}
            className={classes.navlink}
            activeClassName={classes.selectedNav}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </ListItem>
        </Button>
      ))}
    </List>
  );
}
