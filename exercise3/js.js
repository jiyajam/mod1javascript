let number1 = parseInt(prompt("Enter the first number"));
let number2 = parseInt(prompt("Enter a second number"));
let number3 = parseInt(prompt("Enter the third number"));
let sum = number1 + number2 + number3;
let product= number1 * number2 * number3;
let average = sum/3;
document.getElementById("sum").innerHTML = `Sum: ${sum}, Product: ${product}, Average: ${average}`;