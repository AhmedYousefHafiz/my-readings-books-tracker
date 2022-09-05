import classes from "./search-page.module.css";
import { Link } from "react-router-dom";
import * as BooksService from "../../../services/books.service";
import { useEffect, useState, useMemo, FC } from "react";

import debounce from "lodash.debounce";
import { IBook } from "../../../models/books";
import Book from "../../ui/book/book";
import { IEventModel } from "../../../models/eventModel";
import { ILibProps } from "../../../models/props";
import { SearchConfig } from "../../../config/search.config";

const SearchPage: FC<ILibProps> = ({ books, addBook }) => {
  const [query, setQuery] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    if (query !== "") {
      BooksService.search(query, SearchConfig.maxSearchResult).then((books) =>
        !books.error ? setSearchedBooks(books) : setSearchedBooks([])
      );
    } else {
      setSearchedBooks([]);
    }
  }, [query]);

  const handleSearch = (event: IEventModel) => {
    setQuery(event.target.value);
  };

  const onSearchTextChanged = useMemo(() => debounce(handleSearch, 500), []);

  useEffect(() => {
    return () => {
      onSearchTextChanged.cancel();
    };
  }, [onSearchTextChanged]);

  return (
    <div className={classes["search-books"]}>
      <div className={classes["search-books-bar"]}>
        <Link to="/" className={classes["close-search"]}>
          Close
        </Link>
        <div className={classes["search-books-input-wrapper"]}>
          <input
            onChange={onSearchTextChanged}
            type="text"
            placeholder="Search by title, author, or ISBN"
            aria-label="Search Input"
          />
        </div>
      </div>
      <div className={classes["search-books-results"]}>
        <ol className="books-grid">
          {searchedBooks.length !== 0 && query ? (
            searchedBooks
              .filter((book: IBook) => book?.imageLinks?.smallThumbnail)
              .map((book: IBook) => {
                let existedBook = books.find(
                  (existedBook) => existedBook.id === book.id
                );
                return existedBook ? (
                  <Book key={book.id} book={existedBook} addBook={addBook} />
                ) : (
                  <Book key={book.id} book={book} addBook={addBook} />
                );
              })
          ) : !query ? (
            <div>
              <h2>Please put the message text in the Search bar</h2>
            </div>
          ) : (
            <div>
              <h2>No books found</h2>
            </div>
          )}
        </ol>
      </div>
    </div>
  );
};
export default SearchPage;
