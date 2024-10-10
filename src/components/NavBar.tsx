import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../../public/images/Logo.webp";

const Navbar = () => {
  return (
    <div className="flex h-20 w-full items-center justify-between bg-blue-300">
      <div className="flex w-1/6 items-center">
        <Link href={"/"}>
          <Image src={Logo} className="ml-10 w-5/6" alt="logo" />
        </Link>
      </div>
      <div className="w-1/2">
        <ul className="flex py-9 text-sm">
          <li className="w-3/4 px-10 text-center text-black">
            <Link href={"/"}>PROJECTS</Link>
          </li>
          <div className="border-2 border-black"></div>
          <li className="w-3/4 px-10 text-center text-black">
            <Link href={"/"}>EVENTS</Link>
          </li>
          <div className="border-2 border-black"></div>
          <li className="w-3/4 px-10 text-center text-black">
            <Link href={"/"}>ABOUT US</Link>
          </li>
          <div className="border-2 border-black"></div>
          <li className="w-3/4 px-10 text-center text-black">
            <Link className="rounded-full bg-blue-100 px-10 py-2" href={"/"}>
              JOIN
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
