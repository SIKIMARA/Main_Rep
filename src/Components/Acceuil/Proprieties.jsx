import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import house1 from "./image/slider-3.jpg";
import house2 from "./image/slider-2.jpg";
import house3 from "./image/slider-1.jpg";
const properties = [
  {
    id: "2",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 255697,
    prix: "488000",
  },

  {
    id: "3",
    img: house3,
    proprietaire: "YASSINE BOUFNICHEL",
    address:
      "Street:  Port de tanger, 90000 \r City:   tanger \r State/province/area: tanger",
    marque: "DACIA",
    distance: 259526,
    prix: "354000",
  },
];
const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
    <Box sx={{ mt: 5, backgroundColor: "#fcf0cc", py: 10, padding: "30px" }}>
      <Container>
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#4f8030",
            margin: "0 auto",
          }}
        ></div>

        <Typography
          variant="h3"
          sx={{
            fontSize: "60px",
            fontWeight: "bold",
            color: "#0000000",
            textAlign: "center",
          }}
        >
          Offres
        </Typography>
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#4f8030",
            margin: "0 auto",
          }}
        ></div>

        <PropertiesBox>
          {properties.map((property) => (
            <House
              key={property.id}
              img={property.img}
              proprietaire={property.proprietaire}
              address={property.address}
              marque={property.marque}
              distance={property.distance}
              prix={property.prix}
            />
          ))}
        </PropertiesBox>
      </Container>
    </Box>
  );
};

export default Properties;
