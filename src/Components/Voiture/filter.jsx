import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  styled,
} from "@material-ui/core";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Box,
  Button,
  Container,
  createTheme,
  Slider,
  Typography,
} from "@mui/material";
import house2 from "../Acceuil/image/slider-2.jpg";
import house3 from "../Acceuil/image/slider-1.jpg";
import Cars from "./Cars";
const theme = createTheme({
  palette: {
    primary: {
      light: "#dfc482",
      main: "#dfc482",
      dark: "#dfc482",
      contrastText: "#ffffff",
    },
  },
});
const properties = [
  {
    id: "1",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 255697,
    prix: "488000",
    disponibilité: true,
    couleur: "Red",
  },
  {
    id: "2",
    img: house2,
    proprietaire: "IDRISS BOUGARRANI",
    address:
      "Street:  Port de fes, 90000 \r City:   fes \r State/province/area: fes",
    marque: "MERCEDES",
    distance: 255697,
    prix: "488000",
    disponibilité: true,
    couleur: "Red",
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
    disponibilité: true,
    couleur: "Red",
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
    disponibilité: true,
    couleur: "Red",
  },
];
const PropertiesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: theme.spacing(5),

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));
function valuetext(value) {
  return `${value}°C`;
}

const PropertiesTextBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));
const FilterBar = () => {
  const [value, setValue] = React.useState([10, 100]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [valuePrice, setValuePrice] = React.useState([0, 100]);

  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "50px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "poppins",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <FilterAltIcon /> FILTER
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <FormControl style={{ width: "220px" }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            /* value={category}*/
            //  onChange={handleCategoryChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="suv">SUV</MenuItem>
            <MenuItem value="sedan">Sedan</MenuItem>
            <MenuItem value="truck">Truck</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "220px" }}>
          <InputLabel id="brand-label">Brand</InputLabel>
          <Select
            labelId="brand-label"
            id="brand"
            //  value={brand}
            //  onChange={handleBrandChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ford">Ford</MenuItem>
            <MenuItem value="toyota">Toyota</MenuItem>
            <MenuItem value="chevy">Chevy</MenuItem>
          </Select>
        </FormControl>

        <FormControl style={{ width: "220px" }}>
          <InputLabel id="brand-label">Coleur</InputLabel>
          <Select
            labelId="Km"
            id="Km"
            //  value={price}
            //  onChange={handlePriceChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>red</MenuItem>
            <MenuItem>White</MenuItem>
            <MenuItem>Black</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "300px", margin: "20px" }}>
          <Typography
            gutterBottom
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            Price (x1000) :
          </Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            value={valuePrice}
            onChange={handleChangePrice}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ width: "300px", color: "#dfc482" }}
          />
        </div>

        <div style={{ width: "300px", margin: "20px" }}>
          <Typography
            gutterBottom
            style={{ textAlign: "center", fontWeight: "700" }}
          >
            KILOMETRAGE(x100) :
          </Typography>
          <Slider
            getAriaLabel={() => "Price range"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{ width: "300px", color: "#dfc482" }}
          />
        </div>
      </div>

      <Button
        style={{
          backgroundColor: "#dfc482",
          color: "#ffffff",
          textAlign: "center",
          margin: "20px 50%",
        }}
      >
        Filter
      </Button>
      <Container>
        <PropertiesBox>
          {properties.map((property) => (
            <Cars
              key={property.id}
              img={property.img}
              proprietaire={property.proprietaire}
              address={property.address}
              marque={property.marque}
              distance={property.distance}
              prix={property.prix}
              disponibilité={property.disponibilité}
              couleur={property.couleur}
            />
          ))}
        </PropertiesBox>
      </Container>
    </div>
  );
};

export default FilterBar;
