import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home.jsx/Home";
import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";


export const router = createBrowserRouter([
    {
        path : "/",
        Component : Root,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                index : true,
                Component : Home,
                loader : ()=>fetch('booksData.json')
            },
            {
                path : "/about",
                Component : About
            },
            {
                path : "/bookDetails/:id",
                Component : BookDetails,
                loader : ()=>fetch('/booksData.json')
            }
        ]
    }
])