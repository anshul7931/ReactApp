let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

//Create component using React way
let TodoComponent = createReactClass({
    render:function(){
        return(
            <h1>Working</h1>
        );
    }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));