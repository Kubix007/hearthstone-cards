import { useState } from "react";
import * as Styles from "./DeckListEmpty.styles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../app/store";
import { getDeckByCode } from "../../../../features/createDeck/createDeckSlice";
import { toast } from "react-toastify";

const DeckListEmpty = () => {
  const dispatch: AppDispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(getDeckByCode(inputValue))
      .then(() => {
        toast.success("Pomyślnie załadowano talię");
      })
      .catch(() => {
        toast.error("Nie udało się załadować talię");
      });
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <Styles.EmptyContainer>
      <Styles.Container>
        <Styles.EmptyLogo />
        <Styles.EmptyInfo>
          Klikaj na karty, aby je dodać albo wklej kod talii
        </Styles.EmptyInfo>
      </Styles.Container>
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
