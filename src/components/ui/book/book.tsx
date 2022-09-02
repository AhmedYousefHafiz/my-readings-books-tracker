import { IBookProps } from "../../../models/bookProps";

function Book({ book, addBook }: IBookProps) {
    return (<li>
        <div className="book">
            <div className="book-top">
                <div style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks})`
                }}></div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>

        </div>

    </li>);
}
export default Book;