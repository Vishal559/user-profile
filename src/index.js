import React from 'react';
import ReactDOM from 'react-dom';
//eslint-disable-next-line
import User, * as user from './components/User'
//eslint-disable-next-line
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="App">
   <User />
    </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

