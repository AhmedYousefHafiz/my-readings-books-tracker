import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { BookShelfTypes } from "../../../config/library.config";
import DropList from "./drop-list";

describe("DropList Component Test", () => {
  test("test rendering list", () => {
    const book = {
      id: "nggnmAEACAAJ",
      authors: ["William E. Shotts, Jr."],
      shelf: "currentlyReading",
      title: "test title",
      imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
    };
    render(
      <DropList
        title="Move to..."
        defaultValue={book.shelf}
        valueList={BookShelfTypes}
        changeHandler={() => {}}
      />,
      { wrapper: BrowserRouter }
    );
    const renderElement = screen.queryByText(BookShelfTypes[0].title, {
      exact: false,
    });
    expect(renderElement).toBeInTheDocument();
  });
});
