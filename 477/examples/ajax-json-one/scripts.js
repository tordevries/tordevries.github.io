// javascript to load a JSON record


// the other function for getting data
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        const result = await response.json();
        // do code with "result"
        doSomething(result);
    } catch (error) {
        console.error(error);
    }
}

// do something with the data
function doSomething(data) {
    console.log(data);

    document.querySelector("h1").innerHTML = data.firstname + " " + data.lastname;
    document.querySelector("h2").innerHTML = data.born + "-" + data.died;
    document.querySelector("#bio").innerHTML = data.bio;
    document.querySelector("#moreInfo a").href = data.url;
}

document.addEventListener("DOMContentLoaded", function(){

    let jsonSource = "https://tordevries.github.io/snippets/sample-person.js";
    let jsonOptions = {};

    getData(jsonSource, jsonOptions);

});
