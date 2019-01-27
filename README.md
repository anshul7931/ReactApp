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

