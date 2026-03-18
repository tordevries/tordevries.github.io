// javascript for modal example


function toggleModal() {
	document.querySelector("#modalCover").classList.toggle("hidden");
	document.querySelector("#modalPopup").classList.toggle("hidden");
}


// wait for DOM to load before adding events
document.addEventListener("DOMContentLoaded", function() {

	// show modal
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

		// build madlib output string
		let outputText = `A vacation is when you take a trip to some ${adj1}
						  place with your ${adj2} family. Usually you go to some
						  place near ${noun1} or up on ${noun2}.
						  A good vacation is when you spent ${year1} years there.`;

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