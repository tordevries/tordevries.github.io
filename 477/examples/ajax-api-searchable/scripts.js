// set up the root URL and access options as globals — adapted from RapidAPI code
const url = 'https://wordsapiv1.p.rapidapi.com/words/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
	}
};

// asynchronous function to fetch data from the API, convert JSON results to an object,
// and pass it to doSomething() to... well, do something 
async function getWord(searchWord) {

    // API is the root URL plus the word we're searching
    const searchURL = url + searchWord; 

    // try fetching the info
    try {

        // pass url and global options
        const response = await fetch(searchURL, options); 

        // convert json results to object
        const result = await response.json(); 

        // pass "result" to another function to do something!
        doSomething(result);

    } catch (error) {
        console.error(error);
    }
}

function doSomething(searchResult) {
    // output search to console
    console.log(searchResult);

    // output the word
    document.querySelector("#word").innerHTML = searchResult.word;

    // definition results is an array because one word can have many definitions
    let allDefs = searchResult.results;

    // clear prior definitions out of the <ul> tag
    document.querySelector("#definitions").innerHTML = "";

    // track last type of word, as some definitions are not returning accurate types
    let lastType = "";

    // use a for-of loop to iterate through all the definitions (even if there is only one)
    for (oneDef of allDefs) {

        // create a new list item object
        let newDef = document.createElement("li");

        // create a new span to go inside the list item, and fill it with the word type
        let newType = document.createElement("span");
        let wordType = "";
        if (oneDef.partOfSpeech == null) {
            wordType = lastType;
        } else {
            wordType = oneDef.partOfSpeech;
            lastType = wordType;
        }
        newType.innerHTML = "(" + wordType + ") ";

        // put the span inside the list item
        newDef.appendChild(newType);

        // append the definition to the list item after the span
        newDef.innerHTML += oneDef.definition;

        // add the list item (with the span inside it) into the #definitions <ul> list 
        document.querySelector("#definitions").appendChild(newDef);
    }
}

document.addEventListener("DOMContentLoaded", function(){

    // start the display with the word "dictionary"
    getWord("dictionary");

    // add "submit" event listener to the form (not the submit button!)
    document.querySelector("#wordSearch").addEventListener("submit", function(event) {

        // get word from the form
        let wordToFind = document.querySelector("#wordToFind").value;
        if (wordToFind != "") {
            getWord(wordToFind);
        } else {
            getWord("blank");
        }

        // stop form from submitting to server, we'll process it entirely in JS/AJAX
    	event.preventDefault();

    });

});