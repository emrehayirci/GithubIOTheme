import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const Sidebar = React.createClass({
    render: function () {
        const pages = [];

        for (let key of Object.keys(this.props.pages)) {
            const value = this.props.pages[key];

            pages.push(<li key={`link-${key}`}><Link to={key}>{value}</Link></li>);
        }

        const ulStyle = {
            "list-style": "none"
        };

        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src="images/avatar.jpg" alt="" /></a>
                    <h1><strong>{this.props.name}</strong></h1>
                    <p>{this.props.title}</p>
                    <ul style={ulStyle}>
                        {pages}
                    </ul>
                </div>
            </header>
        );
    }
})

module.exports = Sidebar;

/*
<header id="header">
    <div class="inner">
        <a href="#" class="image avatar"><img src="images/avatar.jpg" alt="" /></a>
        <h1><strong>I am Strata</strong>, a super simple<br />
        responsive site template freebie<br />
        crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
    </div>
</header>*/
