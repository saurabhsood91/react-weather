var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h4>
            The weather in {city} is {temp} degrees
        </h4>
    );
};

module.exports = WeatherMessage;
