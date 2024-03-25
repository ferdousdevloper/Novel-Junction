import { useParams } from "react-router-dom";
import useBooksData from "../Hooks/useBooksData";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const [singleData, setSingleData] = useState({});

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
  } = singleData || {};

  console.log();

  const { bookId } = useParams();
  const { data } = useBooksData();

  useEffect(() => {
    const singleBookData = data.find((book) => book.bookId == bookId);
    setSingleData(singleBookData);
  }, [data, bookId]);
  return (
    <div className="">
      <div className=" flex flex-col lg:flex-row gap-8 bg-base-100 items-center rounded-3xl p-5">
        <figure>
          <img
            src={image}
            alt=""
            className="lg:p-20 p-8 bg-[#1313130D]  rounded-3xl"
          />
        </figure>
        <div className="max-w-4xl">
          <h2 className="text-[#131313] text-5xl font-bold font-playfair mb-4">
            {bookName}
          </h2>
          <p className="text-[#131313CC] font-semibold text-base mb-6">
            By : {author}
          </p>
          <hr className="my-8" />
          <p className="text-[#131313B2] font-semibold text-base">{category}</p>
          <hr className="my-8" />
          <p className="text-[#131313B2] font-semibold text-base leading-[40px]">
            <strong className="text-[#131313]">Review :</strong> {review}
          </p>
          <div className="flex gap-4 mb-6">
            <p className="py-2 px-4 bg-[#23BE0A0D] text-[#23BE0A] text-base font-semibold rounded-3xl">
              {}
            </p>
            <p className="my-2 px-4 bg-[#23BE0A0D] text-[#23BE0A] text-base font-semibold rounded-3xl">
              {tags}
            </p>
          </div>
          <hr className="my-8" />
          <table className=" text-[#131313B2] font-semibold text-base lg:w-[600px] leading-[40px] my-8">
            <tr>
              <td>Number of Pages:</td>
              <td>{totalPages}</td>
            </tr>
            <tr>
              <td>Publisher:</td>
              <td>{publisher}</td>
            </tr>
            <tr>
              <td>Year of Publishing:</td>
              <td>{yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td>{rating}</td>
            </tr>
          </table>
          <div className="card-actions ">
            <button className="btn border bg-white text-lg font-semibold">
              Read
            </button>
            <a className="btn bg-[#59C6D2] text-white text-lg font-semibold">
              Wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
