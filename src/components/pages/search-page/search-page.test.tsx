import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import * as BooksService from "../../../services/books.service";
import SearchPage from "./search-page";
const bookData = [
  {
    id: "nggnmAEACAAJ",
    authors: ["William E. Shotts, Jr."],
    shelf: "currentlyReading",
    title: "test title",
    imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
  },
];
describe("SearchPage Component Test", () => {
  beforeAll(() => {
    jest.mock("../../../services/books.service", () => {
      search: jest.fn(() =>
        Promise.resolve([
          {
            id: "nggnmAEACAAJ",
            authors: ["William E. Shotts, Jr."],
            shelf: "currentlyReading",
            title: "test title",
            imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
          },
        ])
      );
    });
  });
  test("Check when search input changed", () => {
    render(<SearchPage books={bookData} addBook={() => {}} />, {
      wrapper: BrowserRouter,
    });
    const searchElement = screen.getByLabelText("Search Input", {
      exact: false,
    }) as HTMLInputElement;
    fireEvent.change(searchElement, { target: { value: "Test Data" } });
    expect(searchElement.value).toBe("Test Data");
  });
  test("Check when search input changed and trigger getting data", async () => {
    render(<SearchPage books={bookData} addBook={() => {}} />, {
      wrapper: BrowserRouter,
    });
    const searchElement = screen.getByLabelText("Search Input", {
      exact: false,
    }) as HTMLInputElement;
    await fireEvent.change(searchElement, { target: { value: "Test Data" } });
    const noBooksFoundDiv = screen.queryByText("No books found", {
      exact: false,
    });
    expect(noBooksFoundDiv).not.toBeInTheDocument();
  });
  test("Check when search input is empty", async () => {
    render(<SearchPage books={bookData} addBook={() => {}} />, {
      wrapper: BrowserRouter,
    });
    const searchElement = screen.getByLabelText("Search Input", {
      exact: false,
    }) as HTMLInputElement;
    await fireEvent.change(searchElement, { target: { value: "" } });
    const searchNotifyDiv = screen.queryByText("Please put the message text", {
      exact: false,
    });
    expect(searchNotifyDiv).toBeInTheDocument();
  });
});
