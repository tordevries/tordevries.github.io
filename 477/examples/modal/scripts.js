// javascript for modal example


function toggleModal() {
	document.querySelector("#modalCover").classList.toggle("show");
	document.querySelector("#modalPopup").classList.toggle("show");
}


// wait for DOM to load before adding events
document.addEventListener("DOMContentLoaded", function() {

	// button to show modal
	document.querySelector("#showModal").addEventListener("click", toggleModal);

	// button to hide modal
	document.querySelector("#modalPopup button").addEventListener("click", toggleModal);

	// button to hide modal
	document.querySelector("#modalCover").addEventListener("click", toggleModal);

});