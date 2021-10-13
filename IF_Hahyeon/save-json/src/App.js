import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './page/Main.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';


function App() { 
  return (
    <Router>
      <div className="App">
        <Main/>
          <Route path="/save">
            
          </Route>
      </div>
    </Router>
  );
}

export default App;