import { IconButton, InputAdornment } from "@mui/material";
import * as Styles from "./SearchFilter.style";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../app/store";
import { changeTextFilter } from "../../../features/filter/filterSlice";
import { useSelector } from "react-redux";

const SearchFilter = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.filter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(changeTextFilter(inputValue));
  };

  useEffect(() => {
    setInputValue(filters.textFilter);
  }, [filters.textFilter]);

  return (
    <Styles.SearchFilterContainer>
      <Styles.LeftSerachLayout />
      <form onSubmit={handleSubmit}>
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
                {inputValue ? (
                  <Styles.ClearInputIcon onClick={() => setInputValue("")} />
                ) : (
                  <Styles.SearchIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </form>
      <Styles.RightSearchLayout />
    </Styles.SearchFilterContainer>
  );
};

export default SearchFilter;
