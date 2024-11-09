let name = prompt("What is your name?");
let house = Math.floor(Math.random() * 4) + 1;

let housename = "";
switch(house) {
    case 1: housename = "Gryffindor"; break;
    case 2: housename = "Slytherin"; break;
    case 3: housename = "Hufflepuff"; break;
    case 4: housename = "Ravenclaw"; break;
}
document.getElementById("name").innerHTML = `You belong to ${housename} ,${name}`;