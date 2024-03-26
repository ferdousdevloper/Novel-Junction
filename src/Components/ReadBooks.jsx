import { useEffect, useState } from "react";
import { getBooks } from "../utils/localStorage";
import ReadBook from "./ReadBook";
import { FaAngleDown } from "react-icons/fa6";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);

  const sortByRating = () => {
    const sortedBookData = [...books].sort((a, b) => b.rating - a.rating);
    setBooks(sortedBookData);
  };
  const sortByPages = () => {
    const sortedBookData = [...books].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setBooks(sortedBookData);
  };
  const sortByYear = () => {
    const sortedBookData = [...books].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setBooks(sortedBookData);
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

      {books.map((book) => (
        <ReadBook key={book.bookId} book={book}></ReadBook>
      ))}
    </div>
  );
};

export default ReadBooks;
