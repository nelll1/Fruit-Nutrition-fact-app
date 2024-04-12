import React from 'react';
import FruitData from "../fruits";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


export default function FreeSoloCreateOption(props) {
    
  return (
    <Autocomplete
    value={props.fruitValue}
    onChange={(event, newValue) => {
      if (typeof newValue === 'string') {
        props.setFruitValue(newValue)
    }}
  }
    selectOnFocus
    clearOnBlur
    handleHomeEndKeys
    options={FruitData}
    getOptionLabel={(option) => {
      // Value selected with enter, right from the input
      if (typeof option === 'string') {
        return option;
      }
      // Regular option
      return option.name;
    }}
    renderOption={(props, option) => <li {...props}>{option.name}</li>}
    sx={{ width: 300 }}
    freeSolo
    renderInput={(params) => (
      <TextField {...params} label="Search Fruit" />
    )}
  />
);
}
