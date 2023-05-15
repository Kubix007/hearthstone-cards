import * as SharedStyles from "../shared/types";

export const countOccurrences = (
  arr: SharedStyles.ICardData[],
  obj: SharedStyles.ICardData
) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === obj) {
      count++;
    }
  }
  return count;
};

export const maxCardReached = (
  countElement: React.MutableRefObject<HTMLDivElement | undefined>,
  currentClass: string
) => {
  countElement.current?.firstElementChild?.setAttribute("style", "color:red");
  countElement.current?.setAttribute("class", `${currentClass} shake`);
  setTimeout(() => {
    countElement.current?.setAttribute("class", `${currentClass}`);
  }, 1000);
};

export const getManaCosts = (cards: SharedStyles.ICardData[]) => {
  const manaCosts = cards.map((item) => item.manaCost);
  const result: {
    manaCosts: { value: number; count: number }[];
    highestManaCost: number;
  } = { manaCosts: [], highestManaCost: 0 };
  manaCosts.forEach((element) => {
    const index = result.manaCosts.findIndex((item) => item.value === element);
    const index7 = result.manaCosts.findIndex((item) => item.value === 7);
    if (element >= 7) {
      if (index7 === -1) {
        result.manaCosts.push({ value: 7, count: 1 });
      } else {
        result.manaCosts[index7].count += 1;
      }
    } else {
      if (index === -1) {
        result.manaCosts.push({ value: element, count: 1 });
      } else {
        result.manaCosts[index].count += 1;
      }
    }
  });
  if (manaCosts.length > 0) {
    const highestValue = result.manaCosts.sort((a, b) => b.count - a.count);
    result.highestManaCost = highestValue[0].count;
  } else {
    result.highestManaCost = 1;
  }
  return result;
};
