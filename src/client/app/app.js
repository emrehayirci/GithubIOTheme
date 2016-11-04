import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar';

const App = React.createClass({
    texts: [],
    getInitialState: function () {
        //creating pages
        const obj = {
            pages: {
                "blog": "Blog",
                "about-me": "About",
                "contact": "Contact",
                "legal": "Legal"
            }
        };

        return obj;
    },
    getTexts: function () {
        // NOTE: mutating an existing class member is not the best practise in such provider methods // Eser
        //currently creating random texts
        texts.push({ title: "lorem ipsum 1 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 2 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 3 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 4 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 5 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 6 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 7 ", text: "lorem ipsum dolor sit amet text" });
        texts.push({ title: "lorem ipsum 8 ", text: "lorem ipsum dolor sit amet text" });
    },
    render: function () {
        /*app.jsx is responsible for handling shared components. It is currently
        referencing for Sidebar but later footer, header parts can be added*/
        return (
            <div>
            <Sidebar name="Emre Hayırcı" title="Free Software Enthusiast" pages={this.state.pages} />
              {this.props.children}
             </div>
        );
    }
});
module.exports = App;
