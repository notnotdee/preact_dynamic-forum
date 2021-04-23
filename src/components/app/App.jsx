import { h } from 'preact';
import { Router } from 'preact-router';
import { Header } from '../header/Header';
import { Main } from '../main/Main';

const App = () => (
  <div id="app">
    <Header />
    <Router>
      <Main path="/" />
    </Router>
  </div>
);

export default App;
