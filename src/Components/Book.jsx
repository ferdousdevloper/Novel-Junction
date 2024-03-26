import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  
  const { bookId, bookName, author, image, rating, category, tags } = book || {};
  return (
    <Link to={`/book-details/${bookId}`}>
      <div className="">
        <div className=" bg-base-100 shadow-xl p-6 border rounded-3xl ">
          <figure className="mb-6 flex justify-center">
            <img
              src={image}
              alt=""
              className="rounded-3xl bg-[#F3F3F3] px-10 py-8 max-h-[500px] w-full"
            />
          </figure>
          <div className=" ">
            <div className="flex gap-4 mb-6">
              <p className="py-2 px-4 bg-[#23BE0A0D] text-[#23BE0A] text-base font-semibold rounded-3xl">
                {tags[0]}
              </p>
              <p className="py-2 px-4 bg-[#23BE0A0D] text-[#23BE0A] text-base font-semibold rounded-3xl">
                {tags[1]}
              </p>
            </div>
            <h2 className="text-[#131313] text-2xl font-bold font-playfair mb-4">
              {bookName}
            </h2>
            <p className="text-[#131313CC] font-semibold text-base mb-6">
              By : {author}
            </p>
            <hr className="border-dashed border-[3px]" />
            <div className="flex justify-between text-[#131313CC] font-semibold text-base mt-6">
              <p className="">{category}</p>
              <div className="flex items-center gap-3 text-lg">
                <p>{rating} </p>
                <FaRegStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
