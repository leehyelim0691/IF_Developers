import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Main from './page/Main.js';
import FormPage from './page/Form.js';
import Start from './page/Start.js';
import { Route, Switch, BrowserRouter, Routes } from 'react-router-dom';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;