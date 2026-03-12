// javascript to load a word from a dictionary API

// copied from RapidAPI
const urlPart1 = 'https://wordsapiv1.p.rapidapi.com/words/';
const urlPart2 = '/definitions';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
		'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

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

// function to initiate the call to the API
function getWord(word) {
    let wordURL = urlPart1 + word + urlPart2;
    getData(wordURL, options);
}

// function to do something with the dictionary result data
function doSomething(wordData) {
    console.log(wordData);

    // insert word from API into page
    document.querySelector("main h1").innerHTML = wordData.word;

    // get handle for the UL tag
    let definitionUL = document.querySelector("main ul");

    // clear inside of UL tag
    definitionUL.innerHTML = "";

    let priorPartOfSpeech = "";

    // loop through definition results and create new LI/SPAN tags
    for (i = 0; i < wordData.definitions.length; i++) {

        // this is the technically correct but long way of adding new HTML tags to the DOM

        // create new LI and SPAN tags
        let newLI = document.createElement("li");
        let newSpan = document.createElement("span");

        // manage part of speech
        if (wordData.definitions[i].partOfSpeech == null) {
            wordData.definitions[i].partOfSpeech = priorPartOfSpeech;
        }
        newSpan.innerHTML = "(" + wordData.definitions[i].partOfSpeech + ")";
        priorPartOfSpeech = wordData.definitions[i].partOfSpeech;
        
        // put part of speech span tag inside LI tag
        newLI.append(newSpan);

        // adds the definition to the internal HTML in the LI tag
        newLI.innerHTML += wordData.definitions[i].definition;

        // puts the LI tag inside the UL 
        definitionUL.append(newLI);

        // short but hacky way of adding new HTML tags:
        // let newDef = "<li><span>" + wordData.definitions[i].partOfSpeech + "</span> " + wordData.definitions[i].definition + "</li>";
        // definitionUL.innerHTML += newDef;

    }

}

document.addEventListener("DOMContentLoaded", function() {

    getWord("igneous");

});