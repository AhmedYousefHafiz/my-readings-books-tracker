import { Link } from "react-router-dom";
import { IBookProps } from "../../../models/props";
import classes from "./book.module.css";
import * as BookService from "../../../services/books.service";
import DropDownList from "../drop-down-list/drop-down-list";
import { BookShelfTypes } from "../../../config/library.config";
import { FC } from "react";

const Book: FC<IBookProps> = ({ book, addBook }) => {
  function changeShelf(event: any) {
    let shelf = event.target.value;
    BookService.update(book, shelf);
    book.shelf = shelf;
    addBook(book);
  }
  function handleDragStart(event: any) {
    event.dataTransfer.setData("book", JSON.stringify(book));
  }
  return (
    <li draggable onDragStart={handleDragStart} aria-label="book-item">
      <div className={classes.book}>
        <div className={classes["book-top"]}>
          <Link to={"/details"} state={book}>
            <div
              className={classes["book-cover"]}
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
              }}
            ></div>
          </Link>

          <DropDownList
            key={book.id}
            title="Move to..."
            defaultValue={book.shelf}
            valueList={BookShelfTypes}
            changeHandler={changeShelf}
          ></DropDownList>
        </div>
        <div className={classes["book-title"]}>{book.title}</div>
        <div className={classes["book-authors"]}>{book.authors}</div>
      </div>
    </li>
  );
};
export default Book;
