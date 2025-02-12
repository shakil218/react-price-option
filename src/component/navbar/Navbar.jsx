import { useState } from "react";
import Link from "../link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="navbar flex px-5 bg-emerald-200 items-center justify-between">
      <div className="navbar-start gap-3">
        <div className="  md:hidden " onClick={() => setOpen(!open)}>
          {open === true ? (
            <AiOutlineClose className="text-2xl"></AiOutlineClose>
          ) : (
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
          )}
          <div>
            <ul className={`absolute duration-1000 ${open ? "top-24" : "-top-60"} bg-emerald-100 p-6 rounded-lg shadow-lg`}>
              {routes.map((route) => (
                <Link key={route.id} route={route}></Link>
              ))}
            </ul>
          </div>
        </div>
        <img className="w-24 hidden md:flex" src="logo.png" alt="" />
      </div>
      <div className="navbar-center">
        <ul className="hidden lg:flex">
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3 navbar-end">
        <label className="input input-bordered flex items-center gap-2 rounded-full">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img src="shakil.jpg" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
