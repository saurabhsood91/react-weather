var React = require('react');

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
        var {title, message} = this.props;
        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal>
                <h4>{title}</h4>
                <p>
                    {message}
                </p>
                <p>
                    <button className="button hollow" data-close="" data-reveal="">
                        Okay
                    </button>
                </p>
            </div>
        );
    },
    componentDidMount: function() {
        // Actually open the modal when the component gets mounted on the DOM
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
});

module.exports = ErrorModal;
