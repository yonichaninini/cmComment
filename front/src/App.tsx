import * as React from 'react';
import Comment from './container/Comment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TestPage1 from './testPage/TestPage1';
import TestPage2 from './testPage/TestPage2';
/*css*/
import './App.css';
import Nav from './testPage/Nav';

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Route path="/1" component={TestPage1} />
        <Route path="/2" component={TestPage2} />
      </Router>
    </div>
  );
};

export default App;
