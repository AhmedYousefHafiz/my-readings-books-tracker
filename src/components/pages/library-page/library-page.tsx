import { ILibProps } from "../../../models/shelfProps";
import BookShelf from "../../ui/book-shelf/book-shelf";


function LibraryPage({ books, addBook }: ILibProps) {
    return (
        <div className="library-list">
            <div className="library-list__title">
                <h1>My Reads</h1>
            </div>
            <div className="library-list__content">
                <BookShelf shelfTitle="Currently Reading"
                    books={books.filter((book) => book.shelf === "currentlyReading")}
                    addBook={addBook}
                />
                <BookShelf shelfTitle="Want to Read"
                    books={books.filter((book) => book.shelf === "wantToRead")}
                    addBook={addBook}
                />
                <BookShelf shelfTitle="Read"
                    books={books.filter((book) => book.shelf === "read")}
                    addBook={addBook}
                />
            </div>
        </div>


    );
};

export default LibraryPage;