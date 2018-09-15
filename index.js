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
