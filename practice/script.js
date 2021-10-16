document.write("Hello World!<br>");

let myGreatName;
myGreatName = "Becky Jones<br>";
document.writeln(myGreatName);

let age = 21;
if (age < 18) {
  document.writeln("選挙権なし<br>");
} else if (18 <= age && age < 25) {
  document.writeln("投票に行けます<br>");
} else {
  document.writeln("衆議院選挙に立候補できます<br>");
}

function greet(greetingType, myName) {
  document.write("Good " + greetingType + "," + myName + "!<br>");
}
greet("morning", "kazuki");

function calculateCost(monthlyBandwidth) {
  if (monthlyBandwidth < 5.0) {
    return monthlyBandwidth * 600;
  } else {
    return 3000;
  }
}
document.write(calculateCost(3.5) + "<br>");
document.write(calculateCost(6) + "<br>");

let element_grt = document.getElementById("greeting");
element_grt.textContent = "Hello DOM";

let element_hlt = document.getElementById("important-element");
element_hlt.style.backgroundColor = "red";

function clicked() {
  document.write("Hello World<br>");
}
let greetButton = document.getElementById("greet-button");
greetButton.onclick = clicked;
