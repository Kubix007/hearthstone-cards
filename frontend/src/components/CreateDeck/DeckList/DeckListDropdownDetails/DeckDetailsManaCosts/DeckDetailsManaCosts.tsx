import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import * as Styles from "./DeckDetailsManaCosts.styles";

const DeckDetailsManaCosts = () => {
  const { manaCosts } = useSelector((state: RootState) => state.createDeck);

  const showManaValue = (
    manaValue: number,
    manaCosts: {
      manaCosts: { value: number; count: number }[];
      highestManaCost: number;
    }
  ) => {
    const index = manaCosts.manaCosts.findIndex(
      (item) => item.value === manaValue
    );
    if (index !== -1) {
      return manaCosts.manaCosts[index].count;
    } else {
      return 0;
    }
  };

  return (
    <Styles.ManaContainer>
      <Styles.ManaColumn0
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(0, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(0, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn0>
      <Styles.ManaColumn1
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(1, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(1, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn1>
      <Styles.ManaColumn2
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(2, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(2, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn2>
      <Styles.ManaColumn3
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(3, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(3, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn3>
      <Styles.ManaColumn4
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(4, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(4, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn4>
      <Styles.ManaColumn5
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(5, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(5, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn5>
      <Styles.ManaColumn6
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(6, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(6, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn6>
      <Styles.ManaColumn7
        $manaValue={
          manaCosts.manaCosts.length > 0 ? showManaValue(7, manaCosts) : 0
        }
        $highestManaValue={manaCosts.highestManaCost}
      >
        <Styles.ManaValue>
          {manaCosts.manaCosts.length > 0 ? showManaValue(7, manaCosts) : 0}
        </Styles.ManaValue>
      </Styles.ManaColumn7>
    </Styles.ManaContainer>
  );
};

export default DeckDetailsManaCosts;
