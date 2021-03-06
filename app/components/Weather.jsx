var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false,

        };
    },
    componentDidMount: function() {
        // To handle search
        // URL change
        // Pull out query string params
        // Due to React Router, this will be passed using props
        var location = this.props.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            // Remove the query string paramater
            window.location.hash = '#/';
        }
    },
    handleSearch: function(city) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(city).then(function(temp) {
            that.setState({
                city: city,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            console.log(errorMessage);
            that.setState({
                isLoading: false,
                errorMessage: errorMessage.message
            });
        });
    },
    componentWillReceiveProps: function(newProps) {
        // React Router will pass new props
        // when the url changes
        var location = newProps.location.query.location;
        if(location && location.length > 0) {
            this.handleSearch(location);
            // Remove the query string paramater
            window.location.hash = '#/';
        }
    },
    render: function() {
        var {city, temp, isLoading, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if(temp && city) {
                // valid temperature and location
                return <WeatherMessage city={city} temp={temp}></WeatherMessage>;
            }
        }

        function renderError() {
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;
