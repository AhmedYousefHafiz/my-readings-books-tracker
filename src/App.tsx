import React, { Suspense, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IBook } from './models/books';
import * as booksService from "./services/books.service";
import Layout from './components/layout/Layout';


function App() {

  //Add lazy loading for components routing
  const LibraryPage = React.lazy(() => import("./components/pages/library-page/library-page"));
  const SearchPage = React.lazy(() => import("./components/pages/search-page/search-page"));
  const DetailsPage = React.lazy(() => import("./components/pages/details-page/details-page"));
  const LoginPage = React.lazy(() => import("./components/auth/login"));

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
    <Layout>
      <Suspense fallback={<span>Loading ...</span>}>
          <Routes>
            <Route path="/" element={<LibraryPage books={books} addBook={addBook} />}></Route>
            <Route path="/search" element={<SearchPage books={books} addBook={addBook}></SearchPage>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>

            <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          </Routes>
      </Suspense>
      </Layout>
  );
}

export default App;
