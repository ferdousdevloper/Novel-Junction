import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ListedBooks from './pages/ListedBooks';
import PageToRead from './pages/PageToRead';
import MainLayOuts from './layOuts/MainLayOuts';
import BookDetails from './Components/BookDetails';
import ReadBooks from './Components/ReadBooks';
import WishList from './Components/WishListBooks';
import { Toaster } from 'react-hot-toast';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOuts></MainLayOuts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>
          },
          {
            path:'wishlist',
            element: <WishList></WishList>
          }
        ],
      },
      {
        path: "/page-to-read",
        element: <PageToRead></PageToRead>
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>,
)
