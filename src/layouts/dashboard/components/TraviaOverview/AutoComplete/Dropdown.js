import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const apiOptions = [{ label: "Video Games", Difficulty: "Normal" }];

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={apiOptions}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Trivia Sessions Config" />}
    />
  );
}
