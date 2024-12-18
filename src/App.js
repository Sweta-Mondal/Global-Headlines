import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';


const App = (props) => {

  const pageSize = 8;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" page={pageSize}  category="general" />} />
          <Route path="/general" element={<News key="general" page={pageSize}  category="general" />} />
          <Route path="/business" element={<News key="business" page={pageSize}  category="business" />} />
          <Route path="/entertainment" element={<News key="entertainment" page={pageSize}  category="entertainment" />} />
          <Route path="/health" element={<News key="health" page={pageSize}  category="health" />} />
          <Route path="/science" element={<News key="science" page={pageSize}  category="science" />} />
          <Route path="/sports" element={<News key="sports" page={pageSize}  category="sports" />} />
          <Route path="/technology" element={<News key="technology" page={pageSize}  category="technology" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;