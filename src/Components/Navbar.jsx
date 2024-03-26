import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-bold border  border-[#23BE0A] mr-3"
              : "font-bold mr-3"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-bold border border-[#23BE0A] mr-3"
              : "font-bold mr-3"
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/page-to-read"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-bold border border-[#23BE0A] mr-3"
              : "font-bold mr-3"
          }
        >
          Page to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-bold border border-[#23BE0A] mr-3"
              : "font-bold mr-3"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#23BE0A] font-bold border border-[#23BE0A] mr-3"
              : "font-bold mr-3"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="lg:container  lg:mx-auto mx-8">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className=" text-3xl font-bold text-[#131313]">
            Novel <span className="text-[#23BE0A]">Junction</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex flex-col lg:flex-row gap-6 items-center">
          <a className="btn bg-[#23BE0A] text-white text-lg font-semibold">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white text-lg font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
