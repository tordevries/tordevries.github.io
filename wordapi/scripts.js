const url = 'https://wordsapiv1.p.rapidapi.com/words/incredible/definitions';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
};



async function getData(url, opts = {}) {
    try {
        const response = await fetch(url, opts);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getHTMLTwo(url) {
    console.log("html two");
    try {
        const response = await fetch(url);
        const result = await response.text();
        document.body.innerHTML = result;
    } catch (error) {
        console.error(error);
    }
}

function getHTMLOne(url) {
    const data = fetch(url)
        .then( function(response) {  
            return response.text(); 
        })
        .then( function(result) {
            // do code with "result"
            console.log(result);
        });
}

function getJSON(url) {
    const data = fetch(url)
        .then( function(response) {  
            return response.json(); 
        })
        .then( function(result) {
            // do code with "result"
            console.log(result);
            console.log(result[0].firstname);
        });
}



document.addEventListener("DOMContentLoaded", function() {

    getData(url, options);

    getHTMLTwo("../snippets/sample-person.html");
    
});