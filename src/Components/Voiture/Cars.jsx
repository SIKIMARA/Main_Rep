import { Box, styled, Typography } from "@mui/material";
import React from "react";
import CarIcon from "@mui/icons-material/DirectionsCarFilled";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Proprietaire from "@mui/icons-material/Person4";
import SpeedIcon from "@mui/icons-material/Speed";
import InventoryIcon from "@mui/icons-material/Inventory";
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
  const HouseBox = styled(Box)(({ theme }) => ({
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
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
      </Box>
    </HouseBox>
  );
};

export default Cars;
