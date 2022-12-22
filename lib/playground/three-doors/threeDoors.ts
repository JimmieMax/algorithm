export default function guessProbability(time: number) {
  const doors = new Array(3);
  let changeWinTime = 0;
  let noneChangeWinTime = 0;
  let i = 0;
  while (i < time) {
    const awardDoorIndex = Math.floor(Math.random() * 3);
    const selectDoorIndex = Math.floor(Math.random() * 3);
    let excludeDoorIndex = 0;
    let j = 0;
    while (j < 3) {
      if (j !== selectDoorIndex && j !== awardDoorIndex) {
        excludeDoorIndex = j;
        break;
      }
      j++;
    }
    if (selectDoorIndex === awardDoorIndex) {
      noneChangeWinTime++;
    } else {
      changeWinTime++;
    }
    i++;
  }
  return { changeWinTime, noneChangeWinTime };
}
