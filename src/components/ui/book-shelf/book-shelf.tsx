import { IShelfProps } from "../../../models/shelfProps";
import Book from "../book/book";
import classes from "./book-shelf.module.css";

function BookShelf({books,shelfTitle,addBook}: IShelfProps) {
    return (
        <div className={classes.bookshelf}>
            <h2 className={classes['bookshelf-title']}>{shelfTitle}</h2>
            <div className={classes['bookShelf-books']}>
                <ol className={classes['books-grid']}>
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