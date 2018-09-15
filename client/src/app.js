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
    Hello Universe
    </h1>,
  document.getElementById('react-container')
);
