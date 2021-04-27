import { h } from 'preact';
import { Router } from 'preact-router';
import { Main } from '../main/Main';

const App = () => (
  <div id="app">
    <Router>
      <Main path="/" title="Home" />
    </Router>
  </div>
);

export default App;
