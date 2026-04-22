// astronomy api test

const authString = btoa(`29269a9f-4ab1-4944-9389-4e4bc1ddda45:d38863eba598f5e202eef51df9bccea5d577301afc6133564480637c5d04b7ae6f228d0e025bfe2adcb901649dd57b633f8a1ac7e7e375c9cb0ecd5909e2ec69e054f629bae7f4a236663bb54f8459bb329a456752feaa7087ba1d4c2f200b23bbf94b809aa4a0eb4a437ee47bbb7110`);

const options = {
	method: 'GET',
	headers: {
		'Authorization': ('Basic ' + authString)
	}
};

// the other function for getting data
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        if (response.ok) {
            const result = await response.text();
            console.log(result);
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener("DOMContentLoaded", function() {

    const url = "https://api.astronomyapi.com/api/v2/bodies/:venus";

    const options2 = {
        method: 'GET',
        headers: {
            'Authorization': ('Basic ' + authString)
        }
    };


    getData(url, options2);

});