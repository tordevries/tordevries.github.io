// add some code to wait for the DOM
document.addEventListener("DOMContentLoaded", function() {

    // options required by RapidAPI's weather API
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b1191f052bmsh9393381bd6d8022p103498jsna1764183a67a',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    // use fetch AJAX to load the API using the required options
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=99163', options)

        .then(response => {
            return response.json(); // get response and convert it to a JavaScript object
        })

        .then(response => {
            
            console.log(response.current); // output to console all of the current weather properties

            document.querySelector("#tempF span").innerHTML = response.current.temp_f; // use response.current.temp_f for fahrenheit
            document.querySelector("#tempC span").innerHTML = response.current.temp_c; // use response.current.temp_f for celsius

        })

        .catch(err => console.error(err)); // any errors? output to console

});