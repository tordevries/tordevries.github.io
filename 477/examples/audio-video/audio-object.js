// set up sound effect object
let whomp = new Audio('technostab.mp3');

// function to play sound
function playWhomp() {
    whomp.currentTime = 0; // rewind to start
    whomp.play();
}

// wait for DOM to load before assigning event listeners
document.addEventListener("DOMContentLoaded", function () {

    // assign click event listener to play the sound
    document.querySelector("#technoWhomp").addEventListener("click", playWhomp);

});
