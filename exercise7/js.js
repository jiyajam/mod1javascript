let diceCount = parseInt(prompt("Enter the number of dice rolls:"));
let sum = 0;
for (let i = 0; i < diceCount; i++) {
  sum += Math.floor(Math.random() * 6) + 1;
}
document.getElementById("answer").innerHTML = `Total sum of dice rolls: ${sum}`;
