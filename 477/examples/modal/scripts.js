// javascript for modal example


/* add class to body if a modal is supposed to appear 
   so body.showModal styles get applied */
function toggleModal() {
	document.body.classList.toggle("showModal");
}


// wait for DOM to load before adding events
document.addEventListener("DOMContentLoaded", function() {

	// button to show modal
	document.querySelector("#modalButton").addEventListener("click", toggleModal);

	// button in the modal to hide it
	document.querySelector("#modalPopup button").addEventListener("click", toggleModal);

	// also hide modal when clicking on background cover
	document.querySelector("#modalCover").addEventListener("click", toggleModal);

});