import * as React from 'react';
import FruitData from "../fruits";
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';


export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
    console.log(FruitData);
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          console.log("first" + event);  
        } else {
          console.log(newValue); //set a new value
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      options={FruitData}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => <li {...props}>{option.name}</li>}
      sx={{ width: 300}}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search Fruit" />
      )}
    />
  );
}
