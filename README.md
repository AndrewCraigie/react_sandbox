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
