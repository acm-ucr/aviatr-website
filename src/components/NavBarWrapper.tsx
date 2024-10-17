"use client";
import Navbar from "./NavBar";
import TransparentNavBar from "./TransparentNavBar";

import { usePathname } from "next/navigation";

const NavbarWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return isHomePage ? (
    <div className="absolute left-0 top-0 z-10 w-full">
      <TransparentNavBar />
    </div>
  ) : (
    <Navbar />
  );
};

export default NavbarWrapper;
