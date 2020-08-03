import React, {useEffect} from 'react';
import xhrPromise from './xhrPromise';

function App() {
  useEffect(() => {
    xhrPromise('https://example.com/large.json', null, null, 'GET')
      .then(xhr => console.log('large.json', xhr))
      .catch(error => console.error("couldn't load large.json", error));
  }, []);

  return (
    <div className="App">
      <h1>React</h1>
    </div>
  );
}

export default App;
