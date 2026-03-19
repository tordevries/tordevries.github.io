// function for getting AJAX data from a URL as JSON
// call with "await", as in:
//
// let someData = await getJsonData(url, options);
//

async function getJsonData(url, options) {
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