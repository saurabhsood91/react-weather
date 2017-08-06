var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a very basic React weather app. I followed the following links:</p>
            <ol>
                <li>
                    <a href="https://github.com/saurabhsood91/react-weather" target="_blank">GitHub Repo</a>
                </li>
                <li>
                    <a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank">Udemy Course Link</a>
                </li>
            </ol>
        </div>
    );
}

module.exports = About;
