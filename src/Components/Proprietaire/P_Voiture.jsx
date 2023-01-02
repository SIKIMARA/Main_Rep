import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@material-ui/core";
import style from "./style.css";
import axios from "axios";
import MaterialTable from "material-table";
import GetAppIcon from "@material-ui/icons/GetApp";
import AddIcon from "@material-ui/icons/Add";
import { ThemeProvider, createTheme } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import HelpIcon from "@material-ui/icons/Help";
import FavoriteIcon from "@material-ui/icons/Favorite";
import image from "../Acceuil/image/slider-4.jpg";

export default function P_Voiture() {
  const [urlPhoto, setImage] = React.useState("");
  const [proprietaire, setProprietaire] = React.useState("");
  const [idMarque, setMarque] = React.useState("");
  const [idCategorie, setCategory] = React.useState("");
  const [nombrePassagers, setNombrePassager] = React.useState("");
  const [km, setKm] = React.useState("");
  const [prix, setPrice] = React.useState("");
  const [annee, setAnnee] = React.useState("");
  const [immatriculation, setImmatriculation] = React.useState("");
  const [dataa, setDataa] = useState(null);
  const [data, setData] = useState([]);

  // State to store the input values from the form
  const [formData, setFormData] = useState({});

  const [menuItems, setMenuItems] = useState([]);

  const defaultMaterialTheme = createTheme();
  const [url, setUrl] = useState("");

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/admin/ListeMarque")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setMenuItems(response.data);
      });
  }, []);
  const [CategorieItem, setCategorieItems] = useState([]);

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/Admin/AllCategories")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setCategorieItems(response.data);
      });
  }, []);
  const [ProprietaireItem, setProprietaireItems] = useState([]);
  const variable = "";
  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/Admin/listeNomProprietaire")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setProprietaireItems(response.data);
      });
  }, []);
  const [CarItem, setCarItems] = useState([]);

  useEffect(() => {
    // Make a request to the web API to fetch the menu items
    axios
      .get("https://localhost:7047/api/Admin/ListeVoiture")
      .then((response) => {
        // Extract the menu items from the data and store them in a state variable
        console.log(response.data);
        setCarItems(response.data);
      });
  }, []);

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make an HTTP request to the API to post the data
      await axios.post(
        "https://localhost:7047/api/Admin/AjouterVoiture",
        formData
      );
      // Re-fetch the data from the API to update the table
      const response = await axios.get(
        "https://localhost:7047/api/Admin/ListeVoiture"
      );
      setData(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "image") {
      const file = event.target.files[0];
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = function () {
        //console.log(fr.result);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: fr.result,
        }));
        console.log(name, fr.result);
        setUrl(fr.result);
      };
    } else if (name === "marque") {
      setMarque(value);
    } else if (name === "category") {
      setCategory(value);
    } else if (name === "nombrePassager") {
      setNombrePassager(value);
    } else if (name === "km") {
      setKm(value);
    } else if (name === "price") {
      setPrice(value);
    } else if (name === "annee") {
      setAnnee(value);
    } else if (name === "Immatriculation") {
      setImmatriculation(value);
    }
  };
  console.log(url);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card
          style={{
            backgroundColor: "#ffffff",
            padding: "40px",
            width: "60%",
            margin: "20px 20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label
            style={{
              fontFamily: "poppins",
              fontSize: "20px",
              color: "#dfc482",
              textAlign: "center",
            }}
          >
            Ajouter Voiture
          </label>
          <TextField
            type="file"
            name="image"
            label="Image"
            onChange={handleChange}
          />

          <FormControl>
            <InputLabel>Marque</InputLabel>
            <Select name="marque" value={idMarque} onChange={handleChange}>
              <option value="">None</option>
              {menuItems.map((menuItem, index) => (
                <MenuItem key={menuItem} value={index}>
                  {menuItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select name="category" value={idCategorie} onChange={handleChange}>
              <option value="">None</option>
              {CategorieItem.map((menuItem, index) => (
                <MenuItem key={menuItem} value={index}>
                  {menuItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Nombre de passagers"
            name="nombrePassager"
            value={nombrePassagers}
            onChange={handleChange}
          />
          <TextField label="Km" name="km" value={km} onChange={handleChange} />
          <TextField
            label="Price"
            name="price"
            value={prix}
            onChange={handleChange}
          />
          <TextField
            label="Année"
            name="annee"
            value={annee}
            onChange={handleChange}
          />
          <TextField
            label="Immatriculation"
            name="Immatriculation"
            value={immatriculation}
            onChange={handleChange}
          />
          <Button
            type="submit"
            style={{
              width: "300px",
              backgroundColor: "#dfc482",
              margin: "30px 10%",
            }}
            onClick={handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        </Card>
      </form>

      <table style={{ backgroundColor: "#ffffff", border: "1px solid black" }}>
        <thead>
          <tr>
            <th>urlPhoto</th>
            <th>nombrePassagers</th>
            <th>nomCategorie</th>
            <th>nomMarque</th>
            <th>couleur</th>
            <th>prix</th>
            <th>annee</th>
            <th>km</th>
            <th>immatriculation</th>
            <th>disponible</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {CarItem.map((item) => (
            <tr>
              <td>
                <img
                  src={item.urlPhoto}
                  style={{ width: "200px", height: "200px" }}
                />
              </td>
              <td>{item.nombrePassagers}</td>
              <td>{item.nomCategorie}</td>
              <td>{item.nomMarque}</td>
              <td>{item.couleur}</td>
              <td>{item.prix}</td>
              <td>{item.annee}</td>
              <td>{item.km}</td>
              <td>{item.immatriculation}</td>
              <td>{item.disponible ? "disponible" : "indisponible"}</td>

              <td>
                <Button
                  style={{
                    backgroundColor: "Red",
                    color: "#ffffff",
                    fontWeight: "700",
                    borderRadius: "5px",
                    padding: "2px 5px",
                  }}
                >
                  Delete
                </Button>
                <Button
                  style={{
                    backgroundColor: "Green",
                    color: "#ffffff",
                    margin: "2px",

                    fontWeight: "700",
                    borderRadius: "5px",
                    padding: "4px 5px",
                  }}
                >
                  Modify
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
