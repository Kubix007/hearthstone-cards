import { VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import * as Styles from "./SearchFilter.style";
import { ReactComponent as SearchIcon } from "../../img/SearchIcon.svg";
import React, { EventHandler, useState } from "react";

const SearchFilter = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <Styles.SearchFilterContainer>
      <Styles.LeftSerachLayout />
      <Styles.SearchInput
        type="text"
        value={inputValue}
        disableUnderline
        placeholder="Wyszukaj"
        onChange={handleChange}
        sx={{
          input: {
            color: "white",
            fontFamily: "BelweBoldBT",
            "&::placeholder": {
              color: "#967463",
              fontFamily: "BelweBoldBT",
            },
          },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end">
              <Styles.SearchIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Styles.RightSearchLayout />
    </Styles.SearchFilterContainer>
  );
};

export default SearchFilter;
