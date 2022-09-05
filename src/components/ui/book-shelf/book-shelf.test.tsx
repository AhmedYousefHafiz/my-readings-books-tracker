import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookShelf from './book-shelf';
describe('BookShelf Component Test', () => {
    test('test rendering books', () => {
        const bookData = [{
            id: "nggnmAEACAAJ",
            authors: ["William E. Shotts, Jr."],
            shelf: "currentlyReading",
            title: "test title",
            imageLinks: { smallThumbnail: "test path", thumbnail: "Test path" },
        }];
        render(<BookShelf books={bookData} shelfTitle={'currentlyReading'} addBook={() => { }} />,{wrapper:BrowserRouter})
        const renderElement = screen.queryByText("currentlyReading",{exact: false});
        expect(renderElement).toBeInTheDocument();
    });
});