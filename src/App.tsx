import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IBook } from './models/books';
import * as booksService from "./services/books.service";


function App() {

  //Add lazy loading for components routing
  const LibraryPage = React.lazy(() => import("./components/pages/library-page/library-page"));
  const SearchPage = React.lazy(() => import("./components/pages/search-page/search-page"));
  const DetailsPage = React.lazy(() => import("./components/pages/details-page/details-page"));
  const NotFoundPage = React.lazy(() => import("./components/pages/not-found-page/not-found-page"));

  //to be replaced with redux 
  const initializeBoos: IBook[] = [];
  const [books, setBooks] = useState(initializeBoos);
  const addBook = (book: IBook) => {
    setBooks([...books.filter((item) => item.id !== book.id), book]);
  }
  useEffect(() => {
    booksService.getAll().then((data) => {
      setBooks(data);
      console.log(data);
    });
  }, []);
  //to be replaced with redux 

  return (
    <div>
      <Suspense fallback={<span>Loading ...</span>}>
        <Router>
          <Routes>
            <Route path="/" element={<LibraryPage books={books} addBook={addBook} />}></Route>
            <Route path="/search" element={<SearchPage></SearchPage>}></Route>
            <Route path="/details" element={<DetailsPage></DetailsPage>}></Route>
            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>

          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
