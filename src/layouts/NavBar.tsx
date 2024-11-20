"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/../public/Logo.webp";
import { items } from "@/data/navigation";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const Navbar = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const delayClick = () => {
    setTimeout(() => {
      handleNav();
    }, 200);
  };

  const animateLeftIn = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  const animationScale = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  };

  const transition = {
    duration: 0.7,
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on medium screens or larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && nav) {
        setNav(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [nav]);

  return (
    <div className={`sticky top-0 z-50`}>
      <div
        className={`flex w-full items-center py-2 transition-all duration-300 ${
          isHomePage && !isScrolled && !nav
            ? "bg-transparent"
            : "bg-aviatr-blue-400"
        }`}
      >
        <motion.div
          className="ml-5 w-1/3 md:ml-10 md:w-1/6"
          variants={animateLeftIn}
          transition={{ ...transition, delay: 0.2 }}
          initial="hidden"
          whileInView="show"
        >
          <Link onClick={nav ? handleNav : undefined} href={"/"}>
            <Image src={Logo} alt="logo" />
          </Link>
        </motion.div>
        <div className={`flex w-5/6 justify-end`}>
          <div className="hidden grid-cols-4 divide-x-2 divide-black font-jost text-xs text-black md:grid lg:text-sm xl:text-base 2xl:text-lg">
            {items.map((item, index) => (
              <div
                key={index}
                className="content-center px-6 text-center lg:px-8 2xl:px-12"
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.1, delay: 0 },
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1, delay: 0 },
                  }}
                  variants={animationScale}
                  transition={{ ...transition, delay: 0.2 }}
                  initial="hidden"
                  animate="show"
                >
                  <Link
                    href={item.link}
                    className={`hover:underline ${
                      item.name === "JOIN" &&
                      "rounded-full bg-aviatr-blue-100 px-6 py-1 lg:px-8 xl:px-10 xl:py-2"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div onClick={handleNav}>
          <Menu className="mr-6 hover:cursor-pointer md:hidden" size={32} />
        </div>
      </div>
      <motion.div
        className={`fixed grid w-full grid-rows-4 justify-items-center gap-y-3 bg-aviatr-blue-400 pb-4 font-jost text-base md:hidden ${
          !nav && "hidden"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: nav ? 1 : 0, y: nav ? 0 : -20 }}
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              className="border-b border-black"
              onClick={delayClick}
              href={item.link}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Navbar;
