# React JS

### Hello World

ReactDom.render - taking two arguments - (elementToMake, container)
React.createElemnt creates the element based on the three arguments passed - tag, attributes, content


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
