import React, {useEffect} from 'react';
import logo from './logo.svg';
import xhrPromise from './xhrPromise';
import './App.css';

function App() {
  useEffect(() => {
    xhrPromise('https://example.com/large.json', null, null, 'GET')
      .then(xhr => console.log('large.json', xhr))
      .catch(error => console.error("couldn't load large.json", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
