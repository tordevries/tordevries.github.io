const url = 'https://wordsapiv1.p.rapidapi.com/words/incredible/definitions';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
};



async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

async function getHTML(url) {
    try {
        const response = await fetch(url);
        const result = await response.text();
        document.body.innerHTML = result;
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener("DOMContentLoaded", function() {

    getHTML("https://tordevries.github.io/snippets/wsu-html-css.html");
   
});