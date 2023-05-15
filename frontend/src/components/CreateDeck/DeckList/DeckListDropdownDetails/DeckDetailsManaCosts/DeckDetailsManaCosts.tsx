import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import * as Styles from "./DeckDetailsManaCosts.styles";

const DeckDetailsManaCosts = () => {
  const { manaCosts } = useSelector((state: RootState) => state.createDeck);

  // const getManaCosts = () => {
  //   const manaCosts = deck.cards.map((item) => item.manaCost);
  //   const result: { value: any; count: number }[] = [];
  //   manaCosts.forEach((element) => {
  //     const index = result.findIndex((item) => item.value === element);
  //     const index7 = result.findIndex((item) => item.value === 7);
  //     if (element >= 7) {
  //       if (index7 === -1) {
  //         result.push({ value: 7, count: 1 });
  //       } else {
  //         result[index7].count += 1;
  //       }
  //     } else {
  //       if (index === -1) {
  //         result.push({ value: element, count: 1 });
  //       } else {
  //         result[index].count += 1;
  //       }
  //     }
  //   });
  //   setManaCosts(result);
  // };

  // const getTheHighestManaValue = () => {
  //   if (manaCosts.length > 0) {
  //     const highestValue = manaCosts.sort((a, b) => b.count - a.count);
  //     setHighestManaValue(highestValue[0].count);
  //   }
  // };

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
