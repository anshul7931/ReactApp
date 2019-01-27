let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

//Create component using React way
let TodoComponent = createReactClass({
    render:function(){
        return(
            <div>
                <h1>Working</h1>
                <p>{this.props.msg}</p>
                <p><strong>Name:{this.props.person.name}</strong></p>
                <p><strong>Age:{this.props.person.age}</strong></p>
                <p><strong>Place:{this.props.person.city}</strong></p>
            </div>
        );
    }
});

var anshulObj = {name:'Anshul Goel', age:'23', city: 'Chandigarh'};

//Put component into html page
ReactDOM.render(<TodoComponent msg="this is prop" person={anshulObj}/>,document.getElementById('todo-wrapper'));