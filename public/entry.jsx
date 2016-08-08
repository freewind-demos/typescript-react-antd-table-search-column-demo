import Hello from './hello.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

ReactDOM.render(
  <Hello />,
  document.getElementById("content")
);

// use jquery
console.log($('#content').text());

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
