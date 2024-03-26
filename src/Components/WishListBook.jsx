import { FaUserFriends } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const WishListBook = ({ wishlistBook }) => {

    const {
        bookId,
        bookName,
        author,
        image,
        rating,
        category,
        tags,
        totalPages,
        publisher,
        yearOfPublishing,
      } = wishlistBook;
    return (
        <div className="mb-8">
      <div className="flex flex-col lg:flex-row gap-8  bg-base-100 items-center rounded-3xl p-5 border">
        <figure className="max-w-[280px]">
          <img
            src={image}
            className="lg:px-12 py-8 p-8 bg-[#1313130D]  rounded-3xl "
          />
        </figure>
        <div className="">
          <h2 className="text-[#131313] text-2xl font-bold font-playfair mb-4">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-semibold text-base mb-6">
            By : {author}
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex flex-col lg:flex-row gap-3 items-center">
              <p className="text-[#131313CC] font-bold text-base">
                <strong>Tag</strong>
              </p>
              {tags?.map((tag) => (
                <p
                  key={tag.id}
                  className="py-2 px-4 bg-[#23BE0A0D] text-[#23BE0A] text-base font-semibold rounded-3xl"
                >
                  <span>#</span>
                  {tag}
                </p>
              ))}
              <div className="flex items-center gap-2 text-[#131313B2] font-semibold text-base">
                <IoLocationOutline />{" "}
                <p>Year of Publishing: {yearOfPublishing}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 text-[#131313B2] font-semibold text-base">
            <div className="flex items-center gap-4">
              <FaUserFriends />
              <p className="">Publisher{publisher}</p>
            </div>
            <div className="flex items-center gap-4">
              <IoDocumentText />
              <p className="">Page {totalPages}</p>
            </div>
          </div>
          <div className="w-full">
            <hr className="my-4 " />
          </div>
          <div className="flex flex-col lg:flex-row gap-2">
            <p className="py-3 px-5 text-base text-[#328EFF] bg-[#328EFF26] rounded-[30px]">
              Category: {category}
            </p>
            <p className="py-3 px-5 text-base text-[#FFAC33] bg-[#FFAC3326] rounded-[30px]">
              Rating: {rating}
            </p>
            <Link to={`/book-details/${bookId}`} className="py-3 px-5 text-base text-white bg-[#23BE0A] rounded-[30px]">
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default WishListBook;