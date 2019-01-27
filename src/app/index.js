let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

//Create component using React way
let TodoComponent = createReactClass({
    getInitialState:function(){
        return{
            todos:['wash up','eat the food','take a nap'],
            age:10
        }
    },//Returns object
    render:function(){
        let self = this;
        let ager = function(){
            self.setState({
                age: 23
            })
        };

       

        //Iterating through the array 
        let todoList = this.state.todos;
        todoList = todoList.map(function(item,index){
            return(
                <li>{item}</li>
            );
        });

        return(
            <div>
                <h1>PROPS</h1>
                <p>{this.props.msg}</p>
                <p><strong>Name:{this.props.person.name}</strong></p>
                <p><strong>Age:{this.props.person.age}</strong></p>
                <p><strong>Place:{this.props.person.city}</strong></p>
                <h1>STATES</h1>
                <div id="todo-list">
                    <p>{this.state.age}</p>
                    <p>The todo list is as follows</p>
                    <ul>
                        {todoList}
                    </ul>
                </div>
            </div>
        );
    }//For Rendering - returns JSX
});

var anshulObj = {name:'Anshul Goel', age:'23', city: 'Chandigarh'};

//Put component into html page
ReactDOM.render(<TodoComponent msg="this is prop" person={anshulObj}/>,document.getElementById('todo-wrapper'));