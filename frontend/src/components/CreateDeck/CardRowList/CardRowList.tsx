import { useSelector } from "react-redux";
import CardRow from "../CardRow/CardRow";
import { RootState } from "../../../app/store";
import * as Styles from "./CardRowList.styles";
import { Grid } from "@mui/material";

const CardRowList = () => {
  const { deck } = useSelector((state: RootState) => state.createDeck);

  return (
    <Styles.Container container justifyContent="top" direction="column">
      {Array.from(new Set(deck.cards))
        .sort((a, b) => a.manaCost - b.manaCost)
        .map((item) => (
          <Grid item key={item.id}>
            <CardRow card={item} />
          </Grid>
        ))}
    </Styles.Container>
  );
};

export default CardRowList;
