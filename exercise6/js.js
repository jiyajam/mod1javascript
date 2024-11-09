if (confirm("Should I calculate the square root?")) {
  let number = parseFloat(prompt("Enter a number:"));
  if (number < 0) {
    document.getElementById("answer").innerHTML = "The square root of a negative number is not defined.";
  } else {
    document.getElementById("answer").innerHTML = `Square root: ${Math.sqrt(number)}`;
  }
} else {
  document.getElementById("answer").innerHTML = "The square root is not calculated.";
}
