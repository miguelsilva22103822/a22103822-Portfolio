const oxfordBlue = "#B1DDF1";
const honoluluBlue = "#2660A4";
const cobaltBlue = "#0047A9";
const platinium = "#F19953";
const alabaster = "#E8EDDF";
const black = "#000000";
const white = "#ffffff";

const transparentWhite = "rgba(255, 255, 255, 0.75)";
const transparentBlack = "rgba(0, 0, 0, 0.75)";

String: currentTheme = "Light";

String: sunFilled = "<i class=\"fa-solid fa-sun\"></i>";
//String: sunEmpty = "<i class=\"fa-regular fa-sun\"></i>";
String: moonFilled = "<i class=\"fa-solid fa-moon\"></i>";
//String: moonEmpty = "<i class=\"fa-regular fa-moon\"></i>";

function setLightTheme() {
    //background and general color
    document.querySelector('html').style.backgroundColor = oxfordBlue;
    document.querySelector('html').style.color = black;
    document.getElementById("background-image").style.backgroundImage = "url(media/bluenightskylight.png)";

    //menu buttons
    let menuButtons = document.querySelectorAll('.menu > button');
    menuButtons.forEach(function(button) {
        button.style.color = black;
        button.style.backgroundColor = transparentWhite;
    });

    let menuA = document.querySelectorAll('.menu > button a');
    menuA.forEach(function(a) {
        a.style.color = black;
    });

    //theme button
    currentTheme = "Light";
    document.getElementById("themetoggle").innerHTML = sunFilled;
}

function setDarkTheme() {
    //background and general color
    document.querySelector('html').style.backgroundColor = honoluluBlue;
    document.querySelector('html').style.color = white;
    document.getElementById("background-image").style.backgroundImage = "url(media/bluenightsky.png)";

    //menu buttons
    let menuButtons = document.querySelectorAll('.menu > button');
    menuButtons.forEach(function(button) {
        button.style.color = white;
        button.style.backgroundColor = transparentBlack;
    });

    let menuA = document.querySelectorAll('.menu > button a');
    menuA.forEach(function(a) {
        a.style.color = white;
    });

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
        button.style.backgroundColor = transparentBlack;

    } else if (currentTheme === "Light"){
        
        button.style.color = black;
        button.style.backgroundColor = transparentWhite;

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
    document.getElementById("apresentacao").scrollIntoView({behavior: "smooth"});
}