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
