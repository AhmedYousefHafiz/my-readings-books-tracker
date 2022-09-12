import { FC } from "react";
import { IBook } from "../../../models/books";

const DetailsPage:FC<{book:IBook}> = ({book}) => {
    return (<h1>DetailsPage</h1>);
};

export default DetailsPage;
