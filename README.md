# React JS

### Hello World

ReactDom.render - taking two arguments - (elementToMake, container)
React.createElemnt creates the element based on the three arguments passed - tag, attributes, content

Note the use of 'className' and not 'class'

```javascript
ReactDOM.render(
  React.createElement(
    'h1',
    {
      id: 'title',
      className: 'header'
    },
    'Hello World'
  ),
  document.getElementById('react-container')
);
```

### Create the element and pass it to the ReactDOM.render function


```javascript
const title = React.createElement(
  'h1',
  {
    id: 'title',
    className: 'header'
  },
  'Hello World'
);

ReactDOM.render(
  title,
  document.getElementById('react-container')
);
```

### Using destructuring to clean up the code

```javascript
const { createElement } = React;
const { render } = ReactDOM;

const title = createElement(
  'h1',
  {
    id: 'title',
    className: 'header'
  },
  'Hello World'
);

render(
  title,
  document.getElementById('react-container')
);
```

### Adding styles to component

Note the use of javascript style names e.g. backgroundColor, fontFamily

```javascript
const { createElement } = React;
const { render } = ReactDOM;

const style = {
  backgroundColor: 'tomato',
  color: 'white',
  fontFamily: 'verdana'
}

const title = createElement(
  'h1',
  {
    id: 'title',
    className: 'header',
    style: style
  },
  'Hello World'
);

render(
  title,
  document.getElementById('react-container')
);
```

### Using JSX instead of React.createElement to define component

Using JSX can remove the need to use React.createElement.
Requires the use of a transpiler as JSX is not natively supported by JS
Note the use of the curly brackets to include an object/variable within
the JSX


```javascript
const { createElement } = React;
const { render } = ReactDOM;

const style = {
  backgroundColor: 'tomato',
  color: 'white',
  fontFamily: 'verdana'
}

render(
  <h1 id='title'
    className = 'header'
    style = { style }>
    Hello World
    </h1>,
  document.getElementById('react-container')
);
```

### Using inline styles

```javascript
style = { style }
```

becomes

```javascript
style = {{ backgroundColor: 'tomato', color: 'white', fontFamily: 'verdana'}}
```

Note the use of double curly brackets

Hello World with inline styles

```javascript
const { createElement } = React;
const { render } = ReactDOM;

render(
  <h1 id='title'
    className = 'header'
    style = {{
      backgroundColor: 'tomato',
      color: 'white',
      fontFamily: 'verdana'
    }}>
    Hello World
    </h1>,
  document.getElementById('react-container')
);
```

### Transpiling with Babel

JSX is not natively supported by JS and will cause an error in the browser
Babel will 'transpile' the JSX to javascript.

For testing, demonstrations and experiments you can use
in-browser transpiling. This is not recommended for production code

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

#### MIME type of script link

For babel to work the MIME type of the script link containing JSX
must be set to 'text/babel'

```html
<script type="text/babel" src="./index.js"></script>
```


## React Project

An npm project allows us to transpile before scripts get to the browser

Remove babel script from index.html
Change MIME type of the application script to 'text/javascript'
and set its file name to 'bundle.js'

```html
<script type="text/javascript" src="./js/bundle.js"></script>
```

#### Initialize npm project

```console
npm init
```

#### Create directory structure

```
.
├── client
|   ├── public
|         └── js
|              └── bundle.js
|         └── index.html
├── server
|     └── server.js
├── .babelrc
├── .gitignore
├── package.json
├── README.md
├── webpack.config.js
```

Add the following to the .bablerc file

```
{
  "presets": ["@babel/preset-env","@babel/preset-react"]
}
```

Ths will set up a 'permissive' babel configuration

#### Install babel

```console
npm install @babel/core @babel/preset-env @babel/preset-react --save-dev
```

```console
npm install babel-loader --save-dev
```


## Automating transpiling and bundling with webpack

Add ```webpack.config.js``` to root of project

Set its contents to:

```javascript
module.exports = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    path: `${__dirname}/client/public/js`,
    filename: 'bundle.js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};

module.exports = config;
```

#### Install webpack

```console
npm install webpack webpack-cli --save-dev
```

#### Install express

We will use express as a server for the project
Note this is not installed as a dev dependency

```console
npm install express
```

#### Install nodemon

We will use nodemon to create a development server with live reload

```console
npm install nodemon --save-dev
```

#### server/server.js

```javascript
const express = require('express');
const app = express();
const path = require('path');
const parser = require('body-parser');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

app.use(parser.json());

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
```

#### Add scripts to package.json

```javascript
  "build": "webpack -w",
  "start": "node server/server.js",
  "server:dev": "nodemon server/server.js",
```

### Install nodemon

```console
  npm install nodemon --save-dev
```

#### Running

```console
  npm run build
```

In another terminal window:

```console
  npm run server:dev
```
