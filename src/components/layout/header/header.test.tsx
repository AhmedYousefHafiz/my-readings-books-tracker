import { screen } from "@testing-library/react";
import Header from "./header";
import { renderWithContext } from "../../../utils/test-utils";
describe("---Test Header Component--", () => {
  test("Test if header title is shown", () => {
    renderWithContext(<Header />);
    const linkElement = screen.queryByText("My Readings Books Tracker", {
      exact: false,
    });
    expect(linkElement).toBeInTheDocument();
  });
  test("Test if Logout link is shown", () => {
    renderWithContext(<Header />);
    const linkElement = screen.queryByText("Login", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
