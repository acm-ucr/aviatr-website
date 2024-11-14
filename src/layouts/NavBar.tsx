"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "@/images/Logo.webp";
import { useState } from "react";
import { items } from "@/data/navigation";
import { Menu } from "lucide-react";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 z-50">
    <div
      className={`flex w-full items-center ${isHomePage ? "bg-transparent" : "bg-aviatr-blue-400"}`}
    >
      <div className="w-1/6 ml-5 md:ml-10">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="flex justify-end w-5/6">
        <div className="hidden grid-cols-4 divide-x-2 divide-black font-jost text-black text-xs lg:text-sm xl:text-base 2xl:text-lg md:grid">
        {items.map((item, index) => (
            <div key={index} className="text-center content-center px-6 lg:px-8 2xl:px-12">
              <Link href={item.link} className={`${item.name === "JOIN" ? "rounded-full bg-aviatr-blue-100 px-6 lg:px-8 xl:px-10 py-1 xl:py-2" : ""}`}>{item.name}</Link>
            </div>
        ))}
        </div>
      </div>
      <div onClick={handleNav} >
        <Menu
          className="mr-2 md:hidden hover:cursor-pointer"
        />
      </div>
    </div>
    <div className={`fixed md:hidden w-full pb-2 grid grid-rows-4 gap-y-2 text-base font-jost justify-items-center bg-aviatr-blue-400 ${nav ? "" : "hidden"}`}>
      {items.map((item, index) => (
        <div key={index}>
          <Link className=" border-b border-black " onClick={handleNav} href={item.link}>{item.name}</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Navbar;
