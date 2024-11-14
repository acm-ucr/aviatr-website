"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/images/Logo.webp";
import Cover from "@/images/home/homepagecover.webp";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={`${isHomePage ? "relative h-screen" : "bg-aviatr-blue-400"} w-full`}
    >
      {isHomePage && (
        <Image src={Cover} className="-z-10" layout="fill" alt="Cover" />
      )}
      <div className="flex h-24 w-full items-center justify-between bg-transparent">
        <div className="flex w-1/6 items-center">
          <Link href={"/"}>
            <Image src={Logo} className="ml-10 w-5/6" alt="logo" />
            {isHomePage && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
            )}
          </Link>
        </div>
        <div className="w-1/2">
          <ul className="flex py-9 text-lg">
            <li className="w-3/4 px-10 text-center font-jost text-black">
              <Link href={"/projects"}>PROJECTS</Link>
            </li>
            <div className="border border-black"></div>
            <li className="w-3/4 px-10 text-center font-jost text-black">
              <Link href={"/events"}>EVENTS</Link>
            </li>
            <div className="border border-black"></div>
            <li className="w-3/4 px-10 text-center font-jost text-black">
              <Link href={"/about"}>ABOUT US</Link>
            </li>
            <div className="border border-black"></div>
            <li className="w-3/4 px-10 text-center font-jost text-black">
              <Link
                className="rounded-full bg-aviatr-blue-100 px-10 py-2"
                href={"/join"}
              >
                JOIN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
