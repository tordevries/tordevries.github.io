// example to load remote HTML into this page

// example fetch.then.then.catch function
function getData(url, opts) {
    const data = fetch(url, opts)
        .then( function(response) {  
            return response.text(); 
        })
        .then( function(result) {
            // do code with "result"
            doSomething(result);
        })
   .catch( function(error) {
            console.log(error);
        });
}

// do something with the data
function doSomething(data) {
    document.querySelector("main").innerHTML = data;
}

document.addEventListener("DOMContentLoaded", function(){

    getData("https://tordevries.github.io/snippets/sample-person.html", {} );

});