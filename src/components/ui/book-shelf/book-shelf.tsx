import { camelCase } from "lodash";
import { IShelfProps } from "../../../models/props";
import Book from "../book/book";
import classes from "./book-shelf.module.css";
import * as BookService from "../../../services/books.service";
import { useAppDispatch } from "../../../store/hooks";
import { booksActions } from "../../../store/books-slice";
import { FC } from "react";
import { IBook } from "../../../models/books";
import { useDispatch } from "react-redux";

const BookShelf: FC<{ books: IBook[]; shelfTitle: string }> = ({
  books,
  shelfTitle,
}) => {
  const dispatch = useAppDispatch();
  function handleDrop(event: any) {
    let draggedBook = JSON.parse(event.dataTransfer.getData("book"));
    let shelfName = camelCase(shelfTitle);
    if (!(draggedBook.shelf === shelfName)) {
      draggedBook.shelf = shelfName;
      BookService.update(draggedBook, shelfName);
      dispatch(booksActions.addBook(draggedBook));
    }
  }
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={handleDrop}
      className={classes.bookshelf}
    >
      <h2 className={classes["bookshelf-title"]}>{shelfTitle}</h2>
      <div className={classes["bookShelf-books"]}>
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
