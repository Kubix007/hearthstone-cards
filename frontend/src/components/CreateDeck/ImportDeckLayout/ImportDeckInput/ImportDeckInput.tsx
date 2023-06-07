import React from "react";
import * as Styles from "./ImportDeckInput.styles";
import * as Types from "./ImportDeckInput.types";

const ImportDeckInput = ({ inputValue, setInputValue }: Types.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

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
