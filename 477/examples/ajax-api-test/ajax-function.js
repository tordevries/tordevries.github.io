/*
function for getting AJAX data from a URL as JSON, call with .then():

getData(url, options).then( function(result) { 
    // code to operate on resulting JSON object 
});


*/

async function getData(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}