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
