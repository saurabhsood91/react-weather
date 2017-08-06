var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();

        // pull value of search input field
        var city = this.refs.city.value;
        if(city.length > 0) {
            // URLEncode string
            // Pass in query string parameters
            var encodedLocation = encodeURIComponent(city);
            if(encodedLocation.length > 0) {
                // Clear the input value
                this.refs.city.value = '';
                // Trigger the search
                window.location.hash = `#/?location=${encodedLocation}`;
            }
        }

    },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Weather App
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input ref="city" type="search" placeholder="Search Weather by city..." />
                            </li>
                            <li>
                                <input type="submit" className="button" value="Get Weather"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Nav;
