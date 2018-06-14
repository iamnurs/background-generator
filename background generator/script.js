var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");
var button = document.querySelector(".random");

body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

function randomColor(){
	var c1 = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
 		return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	var c2 = '#'+'0123456789abcdef'.split('').map(function(v,i,a){
  		return i>5 ? null : a[Math.floor(Math.random()*16)] }).join('');
	color1.value = c1;
  	color2.value = c2;
  	gradientChange();
}

function textChange(){
	h3.textContent = body.style.background + ";";
}

function gradientChange() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	textChange();
}

textChange();

color1.addEventListener("input", gradientChange);
color2.addEventListener("input", gradientChange);
button.addEventListener("click", randomColor);
