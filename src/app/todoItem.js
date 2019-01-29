let React = require('react');
let createReactClass = require('create-react-class');
let ReactDOM = require('react-dom');

require('./css/todoItem.css');

//Create an Item Component
// we use className because class is a reserved keyword
let ToDoItem = createReactClass({
    render: function(){
        return(
            <li>
                <div className="todo-item"> 
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete}> x</span>
                </div>
            </li>
        );
    },

    //Custom Function
    handleDelete :function(){
        this.props.onDelete(this.props.item);
    }
});

module.exports = ToDoItem;