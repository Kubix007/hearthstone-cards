import * as Styles from "./ImportDeckInput.styles";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../../app/store";
import { useSelector } from "react-redux";

const ImportDeckInput = () => {
  const [inputValue, setInputValue] = useState("");
  // const dispatch: AppDispatch = useDispatch();
  const { filters } = useSelector((state: RootState) => state.filter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
          placeholder="Wklej tutaj kod talii"
          onChange={handleChange}
          sx={{
            input: {
              color: "white",
              fontFamily: "BelweBoldBT",
              "&::placeholder": {
                color: "#00000",
                fontFamily: "BelweBoldBT",
              },
            },
          }}
        />
      </form>
      <Styles.RightSearchLayout />
    </Styles.SearchFilterContainer>
  );
};

export default ImportDeckInput;
