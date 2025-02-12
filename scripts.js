document.addEventListener("DOMContentLoaded", function(event){
    document.getElementById("helloTest").innerHTML = "testing: 1, 2, 3... ";
    setTimeout(function() {
        var userResponse = prompt("Welcome to the page! Please enter your response:");
        console.log("User response:", userResponse);
    }, 1000);
});