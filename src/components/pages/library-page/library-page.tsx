import { BookShelfTypes } from "../../../enum/book-shelf-types.enum";
import { ILibProps } from "../../../models/shelfProps";
import BookShelf from "../../ui/book-shelf/book-shelf";


function LibraryPage({ books, addBook }: ILibProps) {
    const categoryKeys: Array<string> = Object.keys(BookShelfTypes);
    return (
        <div className="library-list">
            <div className="library-list__title">
                <h1>My Reads</h1>
            </div>
            <div className="library-list__content">
                {categoryKeys.map(key => (
                    <BookShelf shelfTitle={BookShelfTypes[key as keyof typeof BookShelfTypes]}
                        books={books.filter((book) => book.shelf === key)}
                        addBook={addBook}
                    />
                ))}

            </div>
        </div>
    );
};

export default LibraryPage;