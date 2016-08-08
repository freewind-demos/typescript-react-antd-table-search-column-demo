import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Hello />,
  document.getElementById("content")
);

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
