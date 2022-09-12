import React, { Suspense, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IBook } from "./models/books";
import * as booksService from "./services/books.service";
import Layout from "./components/layout/Layout";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { booksActions } from "./store/books-slice";

function App() {
  //Add lazy loading for components routing
  const LibraryPage = React.lazy(
    () => import("./components/pages/library-page/library-page")
  );
  const SearchPage = React.lazy(
    () => import("./components/pages/search-page/search-page")
  );
  const DetailsPage = React.lazy(
    () => import("./components/pages/details-page/details-page")
  );
  const LoginPage = React.lazy(() => import("./components/auth/login"));

  const NotFoundPage = React.lazy(
    () => import("./components/pages/not-found-page/not-found-page")
  );

  //to be replaced with redux
  const books = useAppSelector((state) => state.bookStore.books);
  const dispatch = useAppDispatch();
  const addBook = (book: IBook) => {
    dispatch(booksActions.addBook(book));
  };
  useEffect(() => {
    booksService.getAll().then((data) => {
      const convertedBooks:IBook[] = data;
      console.log(`Getting Books State => ${convertedBooks}`);

     dispatch(booksActions.appendBooks(convertedBooks));
      console.log(`New Books State => ${books}`);
    });
  }, []);
  //to be replaced with redux

  return (
    <Layout>
      <Suspense fallback={<span>Loading ...</span>}>
        <Routes>
          <Route
            path="/"
            element={<LibraryPage />}
          ></Route>
          <Route
            path="/search"
            element={<SearchPage></SearchPage>}
          ></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>

          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
