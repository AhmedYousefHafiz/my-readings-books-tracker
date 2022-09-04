import { Link } from "react-router-dom";
import { BookShelfTypes } from "../../../enum/book-shelf-types.enum";
import { ILibProps } from "../../../models/shelfProps";
import BookShelf from "../../ui/book-shelf/book-shelf";
import classes from "./library-page.module.css";

function LibraryPage({ books, addBook }: ILibProps) {
    const categoryKeys: Array<string> = Object.keys(BookShelfTypes);
    return (
        <div className="library">
            <div className={classes['library-shelf__title']}>
                <h1>My Reads</h1>
            </div>
            <div className={classes['library-shelf__content']}>
                {categoryKeys.map(key => (
                    <BookShelf shelfTitle={BookShelfTypes[key as keyof typeof BookShelfTypes]}
                        books={books.filter((book) => book.shelf === key)}
                        addBook={addBook}
                        key={key}
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