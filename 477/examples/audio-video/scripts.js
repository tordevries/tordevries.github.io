/*

For reference to the audio and video object properties, methods, and events:
https://www.w3schools.com/tags/ref_av_dom.asp

*/



// function to play the audio using the object from window.onload
function playAud() {
	document.querySelector("#chaseMusic").play();
}

// function to pause the audio using the object from window.onload
function pauseAud() {
	document.querySelector("#chaseMusic").pause();
}




// function to play the video using the object from window.onload
function playVid() {
	document.querySelector("#typingVideo").play();
}

// function to pause the video using the object from window.onload
function pauseVid() {
	document.querySelector("#typingVideo").pause();
}





window.addEventListener("load", function() {
		
	// get the audio object
	let myAud = document.querySelector("#chaseMusic");	
	
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
	
	
	
	
	// get the video object
	let myVid = document.querySelector("#typingVideo");	
	
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

	
}); 