import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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
    render(<LibraryPage books={bookData} addBook={() => {}} />, {
      wrapper: BrowserRouter,
    });
    const renderElement = await screen.getByRole("listitem", { exact: false });
    expect(renderElement).toBeInTheDocument();
  });
});
