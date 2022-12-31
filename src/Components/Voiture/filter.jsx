import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField } from '@material-ui/core';

const FilterBar = () => {
 /* const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  React.useEffect(() => {
    setFilteredVehicles(
      vehicles.filter(
        (vehicle) =>
          (category === '' || vehicle.category === category) &&
          (brand === '' || vehicle.brand === brand) &&
          (price === '' || vehicle.price <= price)
      )
    );
  }, [category, brand, price, vehicles]);
*/
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
      <FormControl style={{width:'220px'}}>
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
      <FormControl style={{width:'220px'}}>
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

      <FormControl style={{width:'220px'}}>
        <InputLabel id="brand-label">Prix</InputLabel>
        <Select
          labelId="price"
          id="price"
        //  value={price}
        //  onChange={handlePriceChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >200--299 DHS</MenuItem>
          <MenuItem >300--499 DHS</MenuItem>
          <MenuItem >500--999 DHS</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{width:'220px'}}>
        <InputLabel id="brand-label">Km</InputLabel>
        <Select
          labelId="Km"
          id="Km"
        //  value={price}
        //  onChange={handlePriceChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem >0--1000km</MenuItem>
          <MenuItem >1000--100000km</MenuItem>
          <MenuItem >plus de 100000km </MenuItem>
        </Select>
      </FormControl>

      <FormControl style={{width:'220px'}}>
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
          <MenuItem >red</MenuItem>
          <MenuItem >White</MenuItem>
          <MenuItem >Black</MenuItem>
        </Select>
      </FormControl>

     
     
    </div>
  );
};

export default FilterBar;

     
