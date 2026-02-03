/*
For reference to the audio and video object properties, methods, and events:
https://www.w3schools.com/tags/ref_av_dom.asp
*/


// set up empty global variables to become references for the audio and video elements
let myAud, myVid;



// function to play the audio using the global set during window load event
function playAud() {
	myAud.play();
}

// function to pause the audio using the global set during window load event
function pauseAud() {
	myAud.pause();
}

// function to play or pause the audio depending on the .pause property of the global
function toggleAud() {
	if (myAud.paused) playAud();
	else pauseAud();
}



// function to play the video using the global set during window load event
function playVid() {
	myVid.play();
}

// function to pause the video using the global set during window load event
function pauseVid() {
	myVid.pause();
}

// function to play or pause the video depending on the .pause propert of the global
function toggleVid() {
	if (myVid.paused) playVid();
	else pauseVid();
}



// wait for window to load before setting globals and event listeners
window.addEventListener("load", function() {
	
	// *************** SETTING UP AUDIO GLOBALS AND EVENT LISTENERS

	// set the audio object using the global set up earlier
	myAud = document.querySelector("#chaseMusic");	
	
	// update the HTML to report the source of the audio
	document.querySelector("#audURL").innerHTML = myAud.currentSrc;
	
	// attach a function to fire when the audio "play" event occurs
	myAud.addEventListener("play", function() {
		document.querySelector("#audStatus").innerHTML = "Playing";
	});
	
	// attach a function to fire when the audio "pause" event occurs
	myAud.addEventListener("pause", function() {
		document.querySelector("#audStatus").innerHTML = "Paused";
	});

	// add event listeners to call functions that start and stop audio
	document.querySelector("#audPlay").addEventListener("click", playAud);	
	document.querySelector("#audPause").addEventListener("click", pauseAud);	
	document.querySelector("#audToggle").addEventListener("click", toggleAud);	
	
	
	// *************** SETTING UP VIDEO GLOBALS AND EVENT LISTENERS

	// set the video object using the global set up earlier
	myVid = document.querySelector("#typingVideo");	
	
	// update the HTML to report the source of the video
	document.querySelector("#vidURL").innerHTML = myVid.currentSrc;
	
	// attach a function to fire when the video "play" event occurs
	myVid.addEventListener("play", function() {
		document.querySelector("#vidStatus").innerHTML = "Playing";
	});
	
	// attach a function to fire when the video "pause" event occurs
	myVid.addEventListener("pause", function() {
		document.querySelector("#vidStatus").innerHTML = "Paused";
	});

	// add event listeners to call functions that start and stop audio
	document.querySelector("#vidPlay").addEventListener("click", playVid);	
	document.querySelector("#vidPause").addEventListener("click", pauseVid);
	document.querySelector("#vidToggle").addEventListener("click", toggleVid);	

}); 