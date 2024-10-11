import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../public/Images/Logo.webp";

const Navbar = () => {
  return (
    <div className="bg-blue-300 flex h-20 w-full items-center justify-between">
      <div className="flex w-1/6 items-center">
        <Link href={"/"}>
          <Image src={Logo} className="ml-10 w-5/6" alt="logo" />
        </Link>
      </div>
      <div className="w-1/2">
        <ul className="flex py-9 text-lg">
          <li className="text-black w-3/4 px-10 text-center">
            <Link href={"/projects"}>PROJECTS</Link>
          </li>
          <div className="border-black border"></div>
          <li className="text-black w-3/4 px-10 text-center">
            <Link href={"/events"}>EVENTS</Link>
          </li>
          <div className="border-black border"></div>
          <li className="text-black w-3/4 px-10 text-center">
            <Link href={"/about"}>ABOUT US</Link>
          </li>
          <div className="border-black border"></div>
          <li className="text-black w-3/4 px-10 text-center">
            <Link
              className="bg-blue-100 rounded-full px-10 py-2"
              href={"/join"}
            >
              JOIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
