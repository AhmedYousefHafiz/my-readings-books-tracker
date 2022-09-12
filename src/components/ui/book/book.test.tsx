import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Book from "./book";


const bookData = {
    id: "ID_01",
    authors: ["William E. Shotts, Jr."],
    shelf: "currentlyReading",
    title: "test title",
    imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
  };

describe("Book Component Test", () => {
  test("test rendering book title", () => {
   
    render(<Book book={bookData}/>, {
      wrapper: BrowserRouter,
    });
    const renderedElement = screen.queryByText("test title", { exact: false });
    expect(renderedElement).toBeInTheDocument();
  });
});
