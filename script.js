var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colorLeft = document
  .getElementsByTagName("input")[0]
  .setAttribute("value", "#ff0000");
var colorRight = document
  .getElementsByTagName("input")[1]
  .setAttribute("value", "#ffff00");
css.textContent = "linear-gradient(to right, red, yellow)";

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
