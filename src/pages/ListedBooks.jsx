import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    const [tabIndex, setTabindex] = useState(0)
  return (
    <div>
        <div className="text-center my-10 py-24 bg-[#1313130D] rounded-3xl">
        <h1 className="font-playfair text-[#131313] text-5xl font-bold">Books</h1>
        </div>
      <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden">
        <Link
          onClick={() => setTabindex(0)}
          to={``}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b  "
          } rounded-t-lg dark:border-gray-300`}
        >
          
          <span>Read Books</span>
        </Link>
        <Link
          onClick={() => setTabindex(1)}
          to={`wishlist`}
          rel="noopener noreferrer"
          href="#"
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          } rounded-t-lg dark:border-gray-300`}
        >
          
          <span>Wishlist Books</span>
        </Link>
        
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
