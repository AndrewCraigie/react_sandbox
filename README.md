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
