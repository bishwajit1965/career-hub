import "./Header.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const routes = [
    { id: 1, route: "/", name: "Home" },
    { id: 2, route: "/statistics", name: "Statistics" },
    { id: 3, route: "/applied-jobs", name: "AppliedJobs" },
    { id: 4, route: "/blog", name: "Blog" },
  ];

  return (
    <nav className="bg-slate-300 lg:shadow-md lg:bg-white py-2 lg:px-28 sticky top-0 border-b-2 border-slate-300 z-50">
      <div
        className="md:hidden text-2xl"
        onClick={() => handleOpen(setOpen(!open))}
      >
        {open === true ? (
          <FaTimes className="m-2 w-6 h-6" />
        ) : (
          <FaBars className="m-2 w-6 h-6" />
        )}
      </div>

      <div className="grid grid-cols-12  gap-3 justify-between items-center px-">
        <div className="col-span-4 md:flex lg:flex justify-start text-xl font-bold hidden lg:visible md:items-center md:ml-2">
          <Link to="/">CareerHub</Link>
        </div>
        <div className="col-span-4">
          <ul
            className={`absolute duration-1000 md:static md:flex lg:flex md:space-x-4 lg:space-x-10 p-4 bg-slate-300 lg:bg-white rounded-b-md px-4 justify-start ${
              open ? "top-[57px]" : "-top-60"
            }`}
          >
            {routes.map((route) => (
              <li key={route.id} className="">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  to={route.route}
                >
                  {route.name}
                </NavLink>
              </li>
            ))}
          </ul>{" "}
        </div>
        <div className="col-span-4 lg:flex justify-end -mt-10 lg:mt-0 md:mt-0 ml-28">
          <Link>
            <button className="btn btn-sm text-xs lg:text-md w-32 text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
              Start Applying
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
