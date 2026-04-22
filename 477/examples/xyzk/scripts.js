// joke api test

const url = "https://icanhazdadjoke.com/";
const options = {
	method: 'GET',
	headers: {
		'User-Agent': 'Dad Joke App At https://tordevries.github.io',
        'Accept': 'application/json'
	}
};

// the other function for getting data
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        if (response.ok) {
            const result = await response.json();
            doSomething(result);
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}

function doSomething(jokeJSON) {
    document.body.innerHTML = jokeJSON.joke;

}


document.addEventListener("DOMContentLoaded", function() {

    getData(url, options);

});