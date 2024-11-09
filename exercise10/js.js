let diceCount = parseInt(prompt("Enter the number of dice:"));
let Sumneeded = parseInt(prompt("Enter the sum you want:"));
let tries = 10000;
let count = 0;

for (let i = 0; i < tries; i++) {
  let diceSum = 0;
  for (let j = 0; j < diceCount; j++) {
    diceSum += Math.floor(Math.random() * 6) + 1;
  }
  if (diceSum === Sumneeded) count++;
}

let probability = (count / tries) * 100;
document.getElementById("answer").innerHTML = `Probability to get sum ${Sumneeded} with ${diceCount} dice is ${probability.toFixed(2)}%`;
