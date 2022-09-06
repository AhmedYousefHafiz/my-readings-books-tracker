import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";
import { BrowserRouter } from "react-router-dom";
describe("---Test Header Component--", () => {
  test("Test if header title is shown", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const linkElement = screen.queryByText("My Readings Books Tracker", {
      exact: false,
    });
    expect(linkElement).toBeInTheDocument();
  });
  test("Test if login link is shown", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const linkElement = screen.queryByText("Login", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("Test if Logout link is shown", () => {
    render(<Header />, { wrapper: BrowserRouter });
    const linkElement = screen.queryByText("Logout", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
});
