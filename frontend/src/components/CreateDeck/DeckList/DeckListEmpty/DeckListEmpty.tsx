import { useState } from "react";
import * as Styles from "./DeckListEmpty.styles";

const DeckListEmpty = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <Styles.EmptyContainer>
      <Styles.EmptyLogo />
      <Styles.EmptyInfo>
        Klikaj na karty, aby je dodać albo wklej kod talii
      </Styles.EmptyInfo>
      <Styles.InputContainer>
        <Styles.LeftSearchLayout />
        <form onSubmit={handleSubmit}>
          <Styles.EmptyDeckInput
            type="text"
            value={inputValue}
            disableUnderline
            placeholder="Wklej tutaj kod talii"
            onChange={handleChange}
            sx={{
              input: {
                color: "rgb(252, 209, 68)",
                fontFamily: "BelweBoldBT",
                "&::placeholder": {
                  color: "rgb(162, 133, 169)",
                  fontFamily: "BelweBoldBT",
                },
              },
            }}
          />
        </form>
        <Styles.RightSearchLayout />
      </Styles.InputContainer>
    </Styles.EmptyContainer>
  );
};

export default DeckListEmpty;
