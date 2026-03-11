// javascript to load many JSON records


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

// output elements of new person for the page
function newPerson(person) {
    let newName = document.createElement("h1");
    newName.innerHTML = person.firstname + " " + person.lastname;

    let newLifespan = document.createElement("h2");
    let deathDate = person.died;
    if (person.died == 0) deathDate = "present";
    newLifespan.innerHTML = person.born + "-" + deathDate;

    let newBio = document.createElement("p");
    newBio.innerHTML = person.bio;
    
    let newLink = document.createElement("p");
    let newAtag = document.createElement("a");
    newAtag.href = person.url;
    newAtag.innerHTML = "More information";
    newLink.appendChild(newAtag);

    let parentMain = document.querySelector("main");
    parentMain.append(newName, newLifespan, newBio, newLink);
    
}


// do something with the data
function doSomething(data) {
    console.log(data);

    for (onePerson of data) {
        newPerson(onePerson);
    }

}

document.addEventListener("DOMContentLoaded", function(){

    let jsonSource = "https://tordevries.github.io/snippets/sample-people.js";
    let jsonOptions = {};

    getData(jsonSource, jsonOptions);

});
