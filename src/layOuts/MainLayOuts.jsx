import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayOuts = () => {
    return (
        <div className="font-worksans lg:container  lg:mx-auto mx-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;