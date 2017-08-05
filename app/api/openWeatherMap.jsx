// Load Axios
// Create function which returns the module

var axios = require('axios');

// Generate the Base URL
// as a template

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=555b083e37f9438751aeba70459857dc&units=imperial';

module.exports = {
    getTemp: function(location) {
        // Returns a promise

        // Build URL with ES6 template strings
        // URLEncode the location
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(response) {
            // success
            if(response.data.code && response.data.message) {
                // Something went wrong
                throw new Error(response.data.message);
            } else {
                // Everything went fine
                return response.data.main.temp;
            }
        }, function(response) {
            // error case
            throw new Error(response.data.message);
        });
    }
};
