const url = 'https://wordsapiv1.p.rapidapi.com/words/incredible/definitions';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
        'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com'
    }
};



async function getData(callback) {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.definitions[0].definition);
    } catch (error) {
        console.error(error);
    }
}



document.addEventListener("DOMContentLoaded", function() {

    getData();
   
});