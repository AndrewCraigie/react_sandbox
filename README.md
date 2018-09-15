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
<script type="text/javascript" src="./scripts/bundle.js"></script>
```

#### Initialize npm project

```console
npm init
```

#### Create directory structure

```
.
├── README.md
├── package.json
├── .gitignore
├── src
|   ├── app.js
├── public
|   ├── index.html
|   ├── scripts
|         └── bundle.js
```

#### Install babel-cli

```
npm install babel-cli --save-dev
```

#### Add .babelrc file

Add a file at the project root called '.babelrc'

```
.
├── README.md
├── package.json
├── .gitignore
├── .babelrc
├── src
|   ├── app.js
├── public
|   ├── index.html
|   ├── scripts
|         └── bundle.js
```
Add the following to the .bablerc file

```
{
  'presets': ['latest', 'react', 'stage-0']
}
```

Ths will set up a 'permissive' babel configuration

#### Install babel using the presets

```console
npm install babel-preset-react --save-dev
```

```console
npm install babel-preset-latest --save-dev
```

```console
npm install babel-preset-stage-0 --save-dev
```

TODO: Explore babel-preset-env (appears to now be the recommended approach)

#### 'manually' running babel

```console
babel ./src/app.js --out-file ./public/scripts/bundle.js
```

This will create the ```bundle.js``` file

## Transpiled code

The app.js code for the component:

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

...is transpiled to:

```javascirpt
'use strict';

var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


render(React.createElement(
  'h1',
  { id: 'title',
    className: 'header',
    style: {
      backgroundColor: 'tomato',
      color: 'white',
      fontFamily: 'verdana'
    } },
  'Hello World'
), document.getElementById('react-container'));
```

## Automating transpiling and bundling with webpack

Add ```webpack.config.js``` to root of project

Set its contents to:

```javascript
const webpack = require('webpack');

const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/public/js`,
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets ['latest', 'stage-0', 'react']
        }
      }
    ]
  }
};

module.exports = config;
```
