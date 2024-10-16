'use client';
import Navbar from "./NavBar";
import TransparentNavBar from "./TransparentNavBar";

import { usePathname } from 'next/navigation';

const NavbarWrapper = () => {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    return isHomePage ? (
        <div className="absolute top-0 left-0 w-full z-10">
            <TransparentNavBar />
        </div>
    ) : (
        <Navbar />
    );
};

export default NavbarWrapper;