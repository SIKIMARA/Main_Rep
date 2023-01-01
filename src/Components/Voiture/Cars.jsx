import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CarIcon from "@mui/icons-material/DirectionsCarFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Proprietaire from "@mui/icons-material/Person4";
import SpeedIcon from "@mui/icons-material/Speed";
import InventoryIcon from "@mui/icons-material/Inventory";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { Button } from "@material-ui/core";

const Cars = ({
  img,
  proprietaire,
  address,
  marque,
  distance,
  prix,
  disponibilité,
  couleur,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fce9bb",
    margin: theme.spacing(2, 2, 2, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const InfoBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));

  return (
    <HouseBox style={{ fontFamily: "poppins", fontWeight: "400" }}>
      <ImgContainer>
        <img src={img} alt="CarPhoto" style={{ maxWidth: "100%" }} />
      </ImgContainer>

      <Box sx={{ padding: "1rem" }}>
        <Typography variant="body2" sx={{ fontWeight: "700" }}>
          <Proprietaire /> {proprietaire}
        </Typography>
        <Typography variant="body2" sx={{ my: 2 }}>
          <span style={{ fontWeight: "700" }}>Adresse : </span>
          {address}
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <InfoBox>
            <CarIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {marque}
            </Typography>
          </InfoBox>

          <InfoBox>
            <SpeedIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {distance} km
            </Typography>
          </InfoBox>

          <InfoBox>
            <MonetizationOnIcon />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {prix} $
            </Typography>
          </InfoBox>
          <InfoBox>
            Color
            <Box
              variant="body2"
              sx={{
                mt: 1,
                backgroundColor: couleur,
                borderRadius: "20px",
                height: "20px",
                width: "20px",
              }}
            ></Box>
          </InfoBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <InfoBox>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {disponibilité ? (
                <span
                  style={{
                    padding: "3px",
                    backgroundColor: "green",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  disponible
                </span>
              ) : (
                <span
                  style={{
                    padding: "3px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "5px",
                  }}
                >
                  indisponible
                </span>
              )}
            </Typography>
          </InfoBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginTop: "10px",
            alignItems: "center",
            justifyContent: "space-around",
            alignContent: "center",
          }}
        >
          <Button
            onClick={handleClickOpen}
            style={{
              display: "flex",
              margin: "10px 40%",
              padding: "20px 70px",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            Reserver
          </Button>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ textAlign: "center" }}>
          MARQUE : {marque}
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia
              style={{ height: 200, width: 400 }}
              image={img}
              title={marque}
            />
            <CardContent style={{ display: "flex" }}>
              <CardContent
                style={{
                  borderRight: "1px solid #dfc482",
                  width: "70%",
                }}
              >
                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Distance:
                  </span>{" "}
                  {distance}KM
                </Typography>
                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Couleur:
                  </span>{" "}
                  {couleur}
                </Typography>

                <Typography
                  style={{
                    fontSize: "17px",
                    fontFamily: "poppins",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  <span style={{ color: "black", fontWeight: "400" }}>
                    Propriétaire:
                  </span>{" "}
                  {proprietaire}
                </Typography>
                <Typography
                  style={{
                    fontSize: "23px",
                    fontFamily: "poppins",
                    color: "#5ba642",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Prix: {prix} $
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Paiment par espece :
                </Typography>
                <Button
                  style={{
                    backgroundColor: "#dfc482",
                    color: "#ffffff",
                    fontFamily: "poppins",

                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  RESERVER VOTRE VOITURE!!!!
                </Button>
              </CardContent>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </HouseBox>
  );
};

export default Cars;
