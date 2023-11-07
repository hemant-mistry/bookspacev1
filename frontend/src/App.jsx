import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './Components/MainContent/MainContent';
import NewPost from './Components/NewPost/NewPost';

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<MainContent />} />
      <Route path="newpost" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;
