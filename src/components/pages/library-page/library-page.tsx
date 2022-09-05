import { Link } from "react-router-dom";
import { BookShelfTypes, LibraryInfo } from "../../../config/library.config";
import { ILibProps } from "../../../models/props";
import BookShelf from "../../ui/book-shelf/book-shelf";
import classes from "./library-page.module.css";

function LibraryPage({ books, addBook }: ILibProps) {
    return (
        <div className="library">
            <div className={classes['library-shelf__title']}>
                <h1>{LibraryInfo.title}</h1>
            </div>
            <div className={classes['library-shelf__content']}>
                {BookShelfTypes.map(shelfInfo => (
                    <BookShelf shelfTitle={shelfInfo.title}
                        books={books.filter((book) => book.shelf === shelfInfo.value)}
                        addBook={addBook}
                        key={shelfInfo.value}
                    />
                ))}

            </div>
            <Link to="/search" className={classes['open-search']}>
                <span>Add a book</span>
            </Link>
        </div>
    );
};

export default LibraryPage;