let startYear = parseInt(prompt("Enter the start year:"));
let endYear = parseInt(prompt("Enter the end year:"));
let list = document.getElementById("result");
for (let year = startYear; year <= endYear; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    let li = document.createElement("li");
    li.textContent = year;
    list.appendChild(li);
  }
}
