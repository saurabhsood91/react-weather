var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(city) {
        var that = this;

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(city).then(function(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var {city, temp, isLoading} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if(temp && city) {
                // valid temperature and location
                return <WeatherMessage city={city} temp={temp}></WeatherMessage>;
            }
        }

        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
