var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');
var $ = require('jquery');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');


const HeadComponent = React.createClass({
    render: function() {
        return (
            <div className="blog-masthead">
                <div className="container">
                    <nav className="blog-nav">
                        <a className="blog-nav-item active" href="#">Home</a>
                        <a className="blog-nav-item" href="#">New features</a>
                        <a className="blog-nav-item" href="#">Press</a>
                        <a className="blog-nav-item" href="#">New hires</a>
                        <a className="blog-nav-item" href="#">About</a>
                    </nav>
                </div>
            </div>
            );
    }
});

module.exports = HeadComponent;