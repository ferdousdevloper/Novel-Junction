import useBooksData from "../Hooks/useBooksData";
import Book from "./Book";



const Books = () => {

        const {data} = useBooksData();
        

  return (
    <div>
      <div className="text-center my-24" >
        <h1 className="font-playfair text-[#131313] text-5xl font-bold">Books</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {
            data.map((book) => <Book key={data.id} book={book} ></Book>)
        }
      </div>


    </div>
  );
};

export default Books;
