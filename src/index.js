import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import DisneyList from './DisneyList'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
      </Route>
      <Route path="/attraction" element={<DisneyList />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

