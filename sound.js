const soundOn = "<i class=\"fa-solid fa-volume-high fa-3x\"></i>";
const soundOff = "<i class=\"fa-solid fa-volume-xmark fa-3x\"></i>";

const play = new Audio("media/play.mp3");
const muteSfx = new Audio("media/mute.mp3");

document.getElementById("mutetoggle").innerHTML = soundOn;

const piano = new Audio("media/piano.mp3");

piano.loop = true;
piano.play();
var mute = false;

document.getElementById("mutetoggle").onclick = function() {
    if (mute) {
        document.getElementById("mutetoggle").innerHTML = soundOn;
        play.play();
        piano
    .play();
        mute = false;
    } else {
        document.getElementById("mutetoggle").innerHTML = soundOff;
        muteSfx.play();
        piano
    .pause();
        mute = true;
    }
}