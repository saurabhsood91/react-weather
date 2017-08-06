var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        // key value pairs for title and Message
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            <div>
            </div>
        );
    },
    componentDidMount: function() {
        var {title, message} = this.props;
        var modalMarkup = (<div id="error-modal" className="reveal tiny text-center" data-reveal>
            <h4>{title}</h4>
            <p>
                {message}
            </p>
            <p>
                <button className="button hollow" data-close="" data-reveal="">
                    Okay
                </button>
            </p>
        </div>);

        // ReactDOMServer.renderToString converts JSX to a string
        // ReactDOM.findDOMNode finds the DOM node for the component
        // We use jQuery to append the converted modal string to the DOM
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        // Actually open the modal when the component gets mounted on the DOM
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
});

module.exports = ErrorModal;
