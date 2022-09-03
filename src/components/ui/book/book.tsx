import { IBookProps } from "../../../models/bookProps";
import classes from "./book.module.css";

function Book({ book, addBook }: IBookProps) {
    return (<li>
        <div className={classes.book}>
            <div className={classes['book-title']}>
                <div  className={classes['book-cover']} style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                }}></div>
            </div>
            <div className={classes['book-title']}>{book.title}</div>
            <div className={classes['book-authors']}>{book.authors}</div>

        </div>

    </li>);
}
export default Book;