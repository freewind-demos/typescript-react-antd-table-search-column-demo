// Notice!!
// we can't use `document.write(...)` here
// which is not allow and produce error:
// It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
const content = document.getElementById('content')
content.innerHTML='it works';

// Notice!!!
// Following is required to make reloading happen
if (module.hot) {
  module.hot.accept();
}
