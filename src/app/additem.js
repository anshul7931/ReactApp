let React = require('react');
let ReactDOM = require('react-dom');
let createReactClass = require('create-react-class');
require('./css/additem.css')

let AddItem = createReactClass({
    render:function(){
        return(
            <form id="add-todo">
                <input type="text" required ref="newItem"/>
                <button onClick={this.handleSubmit}>Hit me</button>
            </form>
        ); 
    },

    //Custom Function
    handleSubmit:function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});

module.exports = AddItem;