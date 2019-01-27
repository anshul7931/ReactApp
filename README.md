Browser under stands vanilla JS and we write react apps in JSX and ES6 so we need babel to transform code. 
To configure Babel, we need webpack.

Initially -> src/index.html , .gitignore

Basically in order to make any react app work, we need react,react dom,babel,webpack and webpack-dev-server

#npm install react react-dom create-react-class --save
#npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev
#npm install webpack webpack-dev-server --save-dev

Now we need to create a webpack config file webpack.config.js to configure the babel behaviour. Accordingly created the entry point as app/index.js in src folder.Now we can run the webpack config using a command which is mentioned in a script in package.json.

#webpack -d && webpack-dev-server --content-base src/ --inline --hot --mode=development --port 1234

Run using 
#npm start

After successful run, we will start with our first component in index.js. We return JSX in the class render method. The JSX should be embedded under one <div> tab if there are multiple tags/lines.

Now props are the way to pass the data in the components(dynamic data components) that needs to be displayed in the react application. Props is properties only.
In order to pass the props, we need to define the prop in ReactDOM rendering and from the component it will be called as {this.props.name_of_prop}
#ReactDOM.render(<TodoComponent msg="this is prop"/>,document.getElementById('todo-wrapper'));
#<p>{this.props.msg}</p> in component

We can also pass variables as
#var anshulObj = {name:'Anshul Goel', age:'23', city: 'Chandigarh'};
#ReactDOM.render(<TodoComponent msg="this is prop" person={anshulObj}/>,document.getElementById('todo-wrapper'));


#STATES

We dont pass states into the component tag, but we define states within the component itself. We can access the state properties in the component itself rather than passing them in the component tag. We can nest one component into another by calling its tag like

let FirstComponent = createReactClass({
render: function(){
    return(
        <div>
            <SecondComponent/>
        </div>
    );
}
});


Here we can pass the state of first component to the second component as a props.

#Nesting Componenets