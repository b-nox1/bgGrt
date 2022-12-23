var css = document.querySelector("h3");
var color1 = document.querySelector(".colr1");
var color2 = document.querySelector(".colr2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to left," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient);