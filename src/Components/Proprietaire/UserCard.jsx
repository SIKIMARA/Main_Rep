import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    marginLeft: "20px",
  },
  bullet: {
    display: "block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
  },
});

export default function UserCard(props) {
  const classes = useStyles();
  const { avatarUrl } = props;
  const [nom, setNom] = useState(props.nom);
  const [prenom, setPrenom] = useState(props.prenom);
  const [adress, setAdress] = useState(props.adress);
  const [tele, setTele] = useState(props.tele);
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className={classes.root}>
        <CardContent
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontFamily: "poppins",

              margin: " 20px",
              color: "#dfc482",
            }}
          >
            Modifier les informations{" "}
          </div>
          <Avatar src={avatarUrl} className={classes.avatar} />

          <TextField
            label="Nom"
            style={{ width: "400px" }}
            value={nom}
            onChange={(event) => setNom(event.target.value)}
          />

          <TextField
            label="Prénom"
            value={prenom}
            style={{ width: "400px" }}
            onChange={(event) => setPrenom(event.target.value)}
          />
          <TextField
            label="Password"
            value={password}
            style={{ width: "400px" }}
            onChange={(event) => setPassword(event.target.value)}
          />
          <TextField
            label="Adresse"
            value={adress}
            style={{ width: "400px" }}
            onChange={(event) => setAdress(event.target.value)}
          />
          <TextField
            label="Téléphone"
            value={tele}
            style={{ width: "400px" }}
            onChange={(event) => setTele(event.target.value)}
          />
          <TextField
            label="Email"
            value={email}
            style={{ width: "400px" }}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            style={{
              backgroundColor: "#1d4701",
              color: "white",
              margin: "30px",
            }}
            disabled={!nom || !prenom || !adress || !tele || !email}
          >
            Envoyer
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}
