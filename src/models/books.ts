export interface IBook {
    id: string,
    authors: string[],
    title: string,
    imageLinks: { smallThumbnail: string, thumbnail: string },
    shelf: string
}