import { camelCase } from "lodash";
import { IShelfProps } from "../../../models/shelfProps";
import Book from "../book/book";
import classes from "./book-shelf.module.css";
import * as BookService from "../../../services/books.service";

function BookShelf({books,shelfTitle,addBook}: IShelfProps) {
    function handleDrop(event: any) {
        let draggedBook = JSON.parse(event.dataTransfer.getData("book"));
        let shelfName = camelCase(shelfTitle);
        if (!(draggedBook.shelf === shelfName)) {
            draggedBook.shelf = shelfName;
            BookService.update(draggedBook, shelfName);
            addBook(draggedBook);
        }
    }
    return (
        <div onDragOver={(e) => { e.preventDefault() }} onDrop={handleDrop} className={classes.bookshelf}>
            <h2 className={classes['bookshelf-title']}>{shelfTitle}</h2>
            <div className={classes['bookShelf-books']}>
                <ol className="books-grid">
                    {
                        books.map((book) => (
                            <Book key={book.id} book={book} addBook={addBook} />
                        ))}

                </ol>
            </div>
        </div>
    );

}
export default BookShelf;