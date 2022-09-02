import { IShelfProps } from "../../../models/shelfProps";
import Book from "../book/book";

function BookShelf({books,shelfTitle,addBook}: IShelfProps) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookShelf-books">
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