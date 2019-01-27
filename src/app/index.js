let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

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
                <ToDoItem item={item} key={index}/>
            );
        });

        return(
            <div>
                <div id="todo-list">
                    <p>The todo list is as follows</p>
                    <ul>
                        {todoList}
                    </ul>
                </div>
            </div>
        );
    }//For Rendering - returns JSX
});

//Create an Item Component
// we use className because class is a reserved keyword
let ToDoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item"> 
                    <span className="item-name">{this.props.item}</span>
                </div>
            </li>
        );
    }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>,document.getElementById('todo-wrapper'));