import { Link } from "react-router-dom";
import banner from '../assets/banner.png';


const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-20 mt-14 bg-[#1313130D] px-28 py-20 rounded-3xl">
            <div className="max-w-[526px]">
                <h1 className="text-[#131313] font-playfair text-6xl leading-[84px] mb-7">Essential Reads to Revitalize Your Bookshelf</h1>
                <Link to='/listed-books'><button className="btn bg-[#23BE0A] text-white text-lg font-semibold">View The List</button></Link>
            </div>
            <div>
                <img className="max-w-[320px]" src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;