// This code loads the IFrame Player API code asynchronously.
let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubePlayer', {
        height: '360',
        width: '640',
        videoId: '-2MUYzkisCM',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();  // commented out so it doesn't autoplay
    document.getElementById("vidStatus").innerHTML = "Ready";
}

// The API calls this function when the player's state changes.
let isPlaying = false; // global to track if video is playing
function onPlayerStateChange(event) {

    if (event.data == 1) {
        document.getElementById("vidStatus").innerHTML = "Playing";
        isPlaying = true;
    }

    if (event.data == 2) {
        document.getElementById("vidStatus").innerHTML = "Paused";
        isPlaying = false;
    }

}

// function to play the video using the object from window.onload
function playVid() {
    player.playVideo();
}

// function to pause the video using the object from window.onload
function pauseVid() {
    player.pauseVideo();
}

// function to pause the video using the object from window.onload
function toggleVid() {
    if (isPlaying) pauseVid();
    else playVid();
}

// function to completely stop and unload the video using the object from window.onload;
// not used in this demo
function stopVideo() {
    player.stopVideo();
}

// wait for window to load, then get info and attach click events
window.addEventListener("load", function() {
    
    // get video URL
    document.querySelector("#vidURL").innerHTML = player.getVideoUrl();

    // add event listeners to call functions that start and stop audio
    document.querySelector("#youPlay").addEventListener("click", playVid);	
    document.querySelector("#youPause").addEventListener("click", pauseVid);	
    document.querySelector("#youToggle").addEventListener("click", toggleVid);	

});