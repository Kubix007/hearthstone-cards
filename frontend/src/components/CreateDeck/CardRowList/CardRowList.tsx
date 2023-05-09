import { useSelector } from "react-redux";
import CardRow from "../CardRow/CardRow";
import { RootState } from "../../../app/store";
import * as Styles from "./CardLowList.styles";
import { Grid } from "@mui/material";

const CardRowList = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  return (
    <Styles.Container
      container
      justifyContent="center"
      direction="column"
      spacing={1}
    >
      {deck.cards.map((item) => (
        <Grid item key={item.id}>
          <CardRow card={item} />
        </Grid>
      ))}
    </Styles.Container>
  );
};

export default CardRowList;
