const oxfordBlue = "#B1DDF1";
const honoluluBlue = "#2660A4";
const cobaltBlue = "#0047A9";
const platinium = "#F19953";
const alabaster = "#E8EDDF";
const black = "#000000";
const white = "#ffffff";

const transparentWhite = "rgba(255, 255, 255, 0.75)";
const transparentBlack = "rgba(0, 0, 0, 0.75)";

const lightOn = new Audio("media/lightOn.mp3");
const lightOff = new Audio("media/lightOff.mp3");

const dayBG = new Image();
dayBG.src = "media/bluenightskylight.png";
const nightBG = new Image();
nightBG.src = "media/bluenightsky.png";

String: currentTheme = "Light";

String: sunFilled = "<i class=\"fa-solid fa-sun fa-sm\"></i>";
//String: sunEmpty = "<i class=\"fa-regular fa-sun\"></i>";
String: moonFilled = "<i class=\"fa-solid fa-moon fa-sm\"></i>";
//String: moonEmpty = "<i class=\"fa-regular fa-moon\"></i>";

function setLightTheme() {
    //background and general color
    document.querySelector('html').style.backgroundColor = oxfordBlue;
    document.querySelector('html').style.color = black;
    document.getElementById("background-image").style.backgroundImage = "url(" + dayBG.src + ")";
    document.querySelector(".menu").style.backgroundColor = transparentWhite;

    //menu buttons
    let menuButtons = document.querySelectorAll('.menu button');
    menuButtons.forEach(function(button) {
        button.style.color = black;
        button.style.backgroundColor = "transparent";
        button.style.color = black;
    });
	
	//music
    lightOn.play();

	//calc-input
	document.getElementById('calc-input').style.color = black;
	document.getElementById('calc-input').style.backgroundColor = transparentWhite;

    //theme button
    currentTheme = "Light";
    document.getElementById("themetoggle").innerHTML = sunFilled;
}

function setDarkTheme() {
    //background and general color
    document.querySelector('html').style.backgroundColor = honoluluBlue;
    document.querySelector('html').style.color = white;
    document.getElementById("background-image").style.backgroundImage = "url(" + nightBG.src + ")";
    document.querySelector(".menu").style.backgroundColor = transparentBlack;

    //menu buttons
    let menuButtons = document.querySelectorAll('.menu button');
    menuButtons.forEach(function(button) {
        button.style.color = white;
        button.style.backgroundColor = "transparent";
    });


	//calc-input
	document.getElementById('calc-input').style.color = white;
	document.getElementById('calc-input').style.backgroundColor = transparentBlack;
   
    //music
    lightOff.play();

    //theme button
    currentTheme = "Dark";
    document.getElementById("themetoggle").innerHTML = moonFilled;
}

function buttonSetHoverColor(button) {

    if (currentTheme === "Dark") {

        button.style.backgroundColor = oxfordBlue;
        button.style.color = black;

    } else if (currentTheme === "Light"){
        
        button.style.backgroundColor = cobaltBlue;
        button.style.color = white;
    }

}

function buttonSetNormalColor(button) {
    if (currentTheme === "Dark") {

        button.style.color = white;
        button.style.backgroundColor = "transparent";

    } else if (currentTheme === "Light"){
        
        button.style.color = black;
        button.style.backgroundColor = "transparent";

    }
}

window.onload = function() {
    setDarkTheme();
}

document.getElementById("themetoggle").onclick = function() {
    if (currentTheme === "Dark") {
        setLightTheme();
    } else if (currentTheme === "Light") {
        setDarkTheme();
    }
}

const buttons = document.querySelectorAll('.menu button');
buttons.forEach(function(button) {

    button.addEventListener('mouseenter', function() {
        buttonSetHoverColor(button);
    });

    button.addEventListener('mouseleave', function() {
        buttonSetNormalColor(button);
    });

});

document.getElementById("jump-to-apresentacao").onclick = function() {
    var element = document.getElementById('apresentacao');
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

document.getElementById("jump-to-calculator").onclick = function() {
    var element = document.getElementById('calculator');
    var headerOffset = 100;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

document.getElementById("calc-input").onchange = function() {
    if (this.value.length > 0) {
        document.getElementById("calc-result").innerHTML = eval(this.value);
    } else {
        document.getElementById("calc-result").innerHTML = "0";
    }
}