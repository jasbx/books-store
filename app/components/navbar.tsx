
import React from "react";

import { FaBook } from "react-icons/fa6";

import Link from "next/link";
import Logout from "./logout/logout";
const Navbar = () => {

  return (
    <div>
      <nav className="mynav" id="mynav">
        <label  className="bookIcon ">
          <FaBook></FaBook>
        </label>

        <label className="logo ">Book Bliss</label>
        <ul className="nav-item  rounded-t-xl">
          <Link href={"/login"} className="btn btn-outline-dark m-2">Login</Link>
          <Link href={"/registar"} className="btn btn-outline-dark m-2">Registar</Link>

          <li>
            <Link className="a text-white text-decoration-none" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="a text-white text-decoration-none" href="/books">
              OurBook
            </Link>
          </li>
      
          <li>
            <Logout/>
            {/* <Link className="a text-white text-decoration-none" href="/post">
              Post
            </Link> */}
          </li>
          <li>
            <Link className="a text-white text-decoration-none" href="/conect">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
