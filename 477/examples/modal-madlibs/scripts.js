// javascript for modal example

// toggle modal display by toggling class on body, which will trigger
// css styles around body.showModal 
function toggleModal() {
	document.body.classList.toggle("showModal");
}


// wait for DOM to load before adding events
document.addEventListener("DOMContentLoaded", function() {

	// handle the modal form's submit event
	let formToSubmit = document.querySelector("#madlibsForm");
	formToSubmit.addEventListener("submit", function(event) {

		event.preventDefault(); // don't let form submit to server

		// examine form code values
		let adj1 = formToSubmit["adjective1"].value;
		let adj2 = document.querySelector("#adjective2").value;
		let noun1 = document.querySelector("#noun1").value;
		let noun2 = document.querySelector("#noun2").value;
		let num1 = document.querySelector("#num1").value;
		let extra1 = document.querySelector("#extra1").checked; // boolean value

		// build madlib output string using template strings
		let outputText = `A vacation is when you take a trip to some ${adj1}
						  place with your ${adj2} family. Usually you visit
						  ${noun1} or go look at ${noun2}. A good vacation is 
						  when you spent ${num1} years there.`;

		if (extra1) {
			outputText += " Let's go on vacation!";
		}

		document.querySelector("#madlibOutput").innerHTML = outputText;

		toggleModal();

	});

	// button to show/hide modal
	let hideIt = document.querySelector("#setMadlib");
	hideIt.addEventListener("click", toggleModal);

});