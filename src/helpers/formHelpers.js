export const riskLevels = [
  {
    value: "1",
    name: "High",
    color: "red",
  },
  {
    value: "2",
    name: "Medium",
    color: "orange",
  },
  {
    value: "3",
    name: "low",
    color: "gray",
  },
];

export const numbersToN = (num) => {
  let numArray = [];
  for (let i = 1; i < num + 1; i++) {
    numArray = [...numArray, i];
  }

  return numArray;
};
