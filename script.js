var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var gradient = document.getElementById("gradient");

function setColor(){
    gradient.style.background = "linear-gradient(to left," + color1.value + "," + color2.value + ")";
    css.textContent = gradient.style.background + ";";
}
color1.addEventListener("input", setColor);

color2.addEventListener("input", setColor);
