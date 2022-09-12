import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import store from "../../../store";
import { booksActions } from "../../../store/books-slice";
import { renderWithContext } from "../../../utils/test-utils";
import LibraryPage from "./library-page";
describe("LibraryPage Component Test", () => {
  test("test rendering books", async () => {
    const bookData = [
      {
        id: "nggnmAEACAAJ",
        authors: ["William E. Shotts, Jr."],
        shelf: "currentlyReading",
        title: "test title",
        imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
      },
    ];

    renderWithContext(<LibraryPage />);
    const renderElement = await screen.getByRole("listitem", { exact: false });
    expect(renderElement).toBeInTheDocument();
  });
});
