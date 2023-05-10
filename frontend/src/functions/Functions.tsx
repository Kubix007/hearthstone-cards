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
