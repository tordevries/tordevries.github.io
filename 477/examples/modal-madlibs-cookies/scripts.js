// javascript for modal madlibs + cookies example


// copied cookie functions from https://www.w3schools.com/js/js_cookies.asp

// sets a cookie of this name with a value "cvalue" to expire "exdays" into the future
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// gets the value of a cookie with this name
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// checks if cookie with this name exists
function checkCookie(cname) {
  let data = getCookie(cname);
  return (data != "");
}



// toggle modal display by toggling class on body, which will trigger
// css styles around body.showModal 
function toggleModal() {
	document.body.classList.toggle("showModal");
}


// wait for DOM to load before adding events
document.addEventListener("DOMContentLoaded", function() {

	// check for cookie content and update form content if found
	if ( checkCookie("adj1") ) {
		let previousAdj1 = getCookie("adj1");
		document.querySelector("#adjective1").value = previousAdj1;
	}

	// handle the modal form's submit event
	let formToSubmit = document.querySelector("#madlibsForm");
	formToSubmit.addEventListener("submit", function(e) {

		e.preventDefault(); // don't let form submit

		// examine form code values
		let adj1 = document.querySelector("#adjective1").value;
		let adj2 = document.querySelector("#adjective2").value;
		let noun1 = document.querySelector("#noun1").value;
		let noun2 = document.querySelector("#noun2").value;
		let year1 = document.querySelector("#year1").value;
		let extra1 = document.querySelector("#extra1").checked;

		// save the first adjective in a cookie for a year
		setCookie("adj1", adj1, 365);

		// build madlib output string using template strings
		let outputText = `A vacation is when you take a trip to some ${adj1}
						  place with your ${adj2} family. Usually you visit
						  ${noun1} or go look at ${noun2}. A good vacation is 
						  when you spent ${year1} years there.`;

		if (extra1) {
			outputText += " Let's go on vacation!";
		}

		document.querySelector("#madlibOutput").innerHTML = outputText;

		toggleModal();

	});

	// hide modal
	let hideIt = document.querySelector("#setMadlib");
	hideIt.addEventListener("click", toggleModal);

});



















