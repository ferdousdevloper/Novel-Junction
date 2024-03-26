import { useEffect, useState } from "react";
import { getWishlistBooks } from "../utils/localStorage";
import WishListBook from "./WishListBook";
import { FaAngleDown } from "react-icons/fa6";


const WishList = () => {

    const [wishlistBooks, setWishlistBooks] = useState([]);

    useEffect(()=>{
        const storedWishlistBooks = getWishlistBooks;
        setWishlistBooks(storedWishlistBooks);
    }, [])



    const sortByRating = () => {
        const sortedBookData = [...wishlistBooks].sort((a, b) => b.rating - a.rating);
        setWishlistBooks(sortedBookData);
      };
      const sortByPages = () => {
        const sortedBookData = [...wishlistBooks].sort(
          (a, b) => b.totalPages - a.totalPages
        );
        setWishlistBooks(sortedBookData);
      };
      const sortByYear = () => {
        const sortedBookData = [...wishlistBooks].sort(
          (a, b) => b.yearOfPublishing - a.yearOfPublishing
        );
        setWishlistBooks(sortedBookData);
      };

    return (
        <div className="mt-8">
            <div className="flex flex-col items-center justify-center my-8">
        <details className="dropdown ">
          <summary className="m-1 btn px-10 bg-[#23BE0A] text-white text-lg font-semibold">
            Short By <FaAngleDown />{" "}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full text-[#131313CC] font-semibold text-base flex flex-col items-center">
            <li onClick={sortByRating}>
              <a>Rating</a>
            </li>
            <li onClick={sortByPages}>
              <a>Number of pages</a>
            </li>
            <li onClick={sortByYear}>
              <a>Publisher year</a>
            </li>
          </ul>
        </details>
      </div>

            {
                wishlistBooks.map((wishlistBook) =>(
                    <WishListBook key={wishlistBook.id} wishlistBook={wishlistBook} ></WishListBook>
                ))
            }
        </div>
    );
};

export default WishList;