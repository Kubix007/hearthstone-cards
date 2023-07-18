import * as Styles from "./SaveDeckDialogInput.styles";
import * as Types from "./SaveDeckDialogInput.types";

const SaveDeckDialogInput = ({
  inputValue,
  setInputValue,
  handleSubmit,
}: Types.IProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue((event.target as HTMLInputElement).value);
  };

  return (
    <Styles.SearchFilterContainer>
      <Styles.LeftDeckNameLayout />
      <form onSubmit={handleSubmit}>
        <Styles.DeckNameInput
          type="text"
          value={inputValue}
          disableUnderline
          placeholder="Nazwa talii"
          onChange={handleChange}
          required
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
        />
      </form>
      <Styles.RightDeckNameLayout />
    </Styles.SearchFilterContainer>
  );
};

export default SaveDeckDialogInput;
