import { FC } from "react";
import { Link } from "react-router-dom";
import { BookShelfTypes, LibraryInfo } from "../../../config/library.config";
import { IBook } from "../../../models/books";
import { ILibProps } from "../../../models/props";
import { booksActions } from "../../../store/books-slice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BookShelf from "../../ui/book-shelf/book-shelf";
import classes from "./library-page.module.css";

const LibraryPage = () => {
  const books = useAppSelector((state) => state.bookStore.books);
  console.log(`New Books State => ${books}`);
  const dispatch = useAppDispatch();
  const addBook = (book: IBook) => {
    dispatch(booksActions.addBook(book));
  };
  return (
    <div className="library">
      <div className={classes["library-shelf__title"]}>
        <h1>{LibraryInfo.title}</h1>
      </div>
      <div className={classes["library-shelf__content"]}>
        {BookShelfTypes.map((shelfInfo) => (
          <BookShelf
            shelfTitle={shelfInfo.title}
            books={books.filter((book) => book.shelf === shelfInfo.value)}
            key={shelfInfo.value}
          />
        ))}
      </div>
      <Link to="/search" className={classes["open-search"]}>
        <span>Add a book</span>
      </Link>
    </div>
  );
};

export default LibraryPage;
