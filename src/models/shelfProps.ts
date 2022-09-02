import { IBook } from "./books";

export interface IShelfProps {
    books: IBook[],
    shelfTitle: string;
    addBook: Function;
}
export interface ILibProps {
    books: IBook[],
    addBook: Function;
}