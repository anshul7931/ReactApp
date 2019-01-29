let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

//CSS Require
require('./css/index.css');


//Module Requires
let ToDoItem = require('./todoItem');
let AddItem = require('./additem');

//Create A Main Component
let TodoComponent = createReactClass({
    getInitialState:function(){
        return{
            todos:['wash up','eat the food','take a nap']
        }
    },//Returns object
    render:function(){
        //Iterating through the array 
        let todoList = this.state.todos;
        todoList = todoList.map(function(item,index){
            return(
                <ToDoItem item={item} key={index} onDelete={this.onDelete}/>
            );
        }.bind(this));

        return(
                <div id="todo-list">
                    <ul>{todoList}</ul>
                    <AddItem onAdd={this.onAdd}/>
                </div>
        );
    },//For Rendering - returns JSX
    onDelete: function(item){
        let updatedTodos = this.state.todos.filter(function(value,index){
            return item!==value;
        });
        this.setState({
            todos:updatedTodos
        });
    },
    onAdd: function(item){
        let updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        });
    }

});



//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));