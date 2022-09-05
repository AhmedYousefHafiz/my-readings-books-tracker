import { IBook } from "./books";

export interface IBookProps {
    book: IBook,
    addBook: Function;
}
export interface IShelfProps {
    books: IBook[],
    shelfTitle: string;
    addBook: Function;
}
export interface ILibProps {
    books: IBook[],
    addBook: Function;
}

