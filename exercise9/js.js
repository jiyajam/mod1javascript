let number = parseInt(prompt("Enter an integer:"));
let isPrime = true;


if (number <= 1) {
  isPrime = false;
}


for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  document.getElementById("answer").innerHTML = `${number} is a prime number.`;
} else {
  document.getElementById("answer").innerHTML = `${number} is not a prime number.`;
}
