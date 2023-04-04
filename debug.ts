import canMatch from "./lib/algorithm/backtracking/age-limitation/ageLimitation";

canMatch(
  [
    {
      min: 10,
      max: 20,
      maximum: 1,
    },
    {
      min: 15,
      max: 25,
      maximum: 2,
    },
    {
      min: 20,
      max: 30,
      maximum: 2,
    },
  ],
  [16, 17, 22, 23, 12]
);
