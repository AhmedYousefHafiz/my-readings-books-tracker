import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { renderWithContext } from "../../../utils/test-utils";
import BookShelf from "./book-shelf";
describe("BookShelf Component Test", () => {
  test("test rendering books", () => {
    const bookData = [
      {
        id: "nggnmAEACAAJ",
        authors: ["William E. Shotts, Jr."],
        shelf: "currentlyReading",
        title: "test title",
        imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
      },
    ];
    renderWithContext(
      <BookShelf books={bookData} shelfTitle={"currentlyReading"} />
    );
    const renderElement = screen.queryByText("currentlyReading", {
      exact: false,
    });
    expect(renderElement).toBeInTheDocument();
  });
});
