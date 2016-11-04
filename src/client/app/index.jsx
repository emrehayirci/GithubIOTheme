import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.jsx';


var App = React.createClass(
    {
        texts:[],
        getInitialState:function(){
            //creating pages
            var obj = {};
            obj.pages = [];
            obj.pages.push("Blog");
            obj.pages.push("About");
            obj.pages.push("Contact");
            obj.pages.push("Legal");
            return obj;

        },
        getTexts:function(){
            //currently creating random texts
            texts.push({title:"lorem ipsum 1 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 2 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 3 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 4 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 5 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 6 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 7 ",text:"lorem ipsum dolor sit amet text"});
            texts.push({title:"lorem ipsum 8 ",text:"lorem ipsum dolor sit amet text"});
        },
        render:function(){
            return (
                <Sidebar name="Emre Hayırcı" title="Free Software Enthusiast" pages={this.state.pages}/>

            )
        }
    }
);
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      {/* Show the dashboard at / */}
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
ReactDOM.render(<App/>, document.getElementById('top'));
