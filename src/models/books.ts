export interface IBook {
    id: number,
    authors: string[],
    title: string,
    imageLinks: { smallThumbnail: string, thumbnail: string },
    shelf: string
}