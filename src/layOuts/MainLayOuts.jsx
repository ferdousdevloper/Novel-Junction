import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayOuts = () => {
    return (
        <div className="font-worksans">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayOuts;