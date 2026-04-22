// joke api test

const url = "https://icanhazdadjoke.com/";
const options = {
	method: 'GET',
	headers: {
		'User-Agent': 'Dad Joke App At https://tordevries.github.io',
        'Accept': 'application/json'
	}
};

// function for getting JSON data and passing it to doSomething() function
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

// receive the joke JSON from getData() and put it in the #jokeBox object
function doSomething(jokeJSON) {
    document.querySelector("#jokeBox").innerHTML = jokeJSON.joke;
}

// wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {

    // get a random joke
    getData(url, options);

});