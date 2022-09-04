import { Link } from "react-router-dom";
import { IBookProps } from "../../../models/bookProps";
import classes from "./book.module.css";
import * as BookService from "../../../services/books.service";

function Book({ book, addBook }: IBookProps) {
    function changeShelf(event: any) {
        let shelf = event.target.value;
        BookService.update(book, shelf);
        book.shelf = shelf;
        addBook(book);
    };
    function handleDragStart(event: any) {
        event.dataTransfer.setData("book", JSON.stringify(book));
    };
    return (
        <li draggable onDragStart={handleDragStart}>
            <div className={classes.book}>
                <div className={classes['book-top']}>
                    <Link to={"/details"} state={book}>
                        <div className={classes['book-cover']} style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}></div>
                    </Link>

                    <div className="book-shelf-changer">
                        <select
                            defaultValue={book.shelf ? book.shelf : "none"}
                            onChange={changeShelf}
                        >
                            <option value="" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className={classes['book-title']}>{book.title}</div>
                <div className={classes['book-authors']}>{book.authors}</div>

            </div>

        </li>);
}
export default Book;