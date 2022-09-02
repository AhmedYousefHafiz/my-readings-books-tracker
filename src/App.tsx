import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryPage from './components/pages/library-page/library-page';
import SearchPage from './components/pages/search-page/search-page';
import DetailsPage from './components/pages/details-page/details-page';
import NotFound from './components/pages/not-found/not-found';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LibraryPage></LibraryPage>}></Route>
          <Route path="/search" element={<SearchPage></SearchPage>}></Route>
          <Route path="/details" element={<DetailsPage></DetailsPage>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>

        </Routes>
      </Router>
   </div>
  );
}

export default App;
