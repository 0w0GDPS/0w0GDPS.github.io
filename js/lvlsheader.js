const header = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired, // name of link
        url: React.PropTypes.string.isRequired // url of link
    },

    render: function() {
        return React.DOM.li(null,
            React.DOM.a({
                href: this.props.url,
                className: 'header_link'
            }, this.props.name)
        );
    }
});

ReactDOM.render(
    React.DOM.div({
        className: 'container'
    }, React.DOM.div({
        className: 'header_body'
    }, React.DOM.a({
        className: 'logo',
        href: '/'
    }, React.DOM.img({
        src: 'https://cdn.discordapp.com/icons/1095338427362312203/9f2a38f4460dcab48d9351f882b41d97.png',
        alt: ''
    })), React.DOM.div({
        className: 'hamburger',
        id: 'hamburger'
    }, React.DOM.span(null)), React.DOM.nav({
        className: 'header_menu',
        id: 'menu'
    }, React.DOM.ul({
        className: 'header_list'
    }, 
        React.createElement(header, {
            name: 'Main',
            url: '/'
        }),
        React.createElement(header, {
            name: 'Download',
            url: 'https://gofruit.space/gdps/00Wy'
        }),
        React.createElement(header, {
            name: 'Lists',
            url: '../lists.html'
        }),
        React.createElement(header, {
            name: 'Contacts',
            url: '../contacts.html'
        }),
    )))),
    document.getElementById('header')
);