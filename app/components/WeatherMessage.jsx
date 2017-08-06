var React = require('react');

var WeatherMessage = ({temp, city}) => {
    return (
        <h3 className="text-center">
            The weather in {city} is {temp} degrees
        </h3>
    );
};

module.exports = WeatherMessage;
