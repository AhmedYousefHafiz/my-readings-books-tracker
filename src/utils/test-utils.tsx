import { Provider } from "react-redux";
import store from "../store";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { booksActions } from "../store/books-slice";
const bookData = [
  {
    id: "nggnmAEACAAJ",
    authors: ["William E. Shotts, Jr."],
    shelf: "currentlyReading",
    title: "test title",
    imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
  },
];
export const renderWithContext = (element: React.ReactElement) => {
  store.dispatch(booksActions.appendBooks(bookData));
  render(<Provider store={store}>{element}</Provider>, { wrapper: Router });
};
