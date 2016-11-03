import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.jsx';


var App = React.createClass(
    {
        render:function(){
            return (
                <Sidebar name="Emre Hayırcı" title="Free Software Enthusiast"/>

            )
        }
    }
);
ReactDOM.render(<App/>, document.getElementById('top'));
