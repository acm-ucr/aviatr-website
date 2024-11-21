import { FaInstagram, FaDiscord, FaYoutube, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Logo.webp";

const Footer = () => {
  return (
    <div>
      <hr className="mx-4 mb-4 mt-2 border-t-2 sm:mx-8 sm:mb-6 lg:mx-12 lg:mb-10"></hr>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-3 whitespace-nowrap pl-5 text-white sm:pl-12 lg:pl-16">
          <div>
            <p className="text-2xs pb-1 sm:text-xs lg:text-xl xl:pb-2">
              PROJECTS
            </p>
            <p className="text-3xs sm:text-2xs lg:text-xs">PROJECT PUFFIN</p>
            <p className="text-3xs sm:text-2xs lg:text-xs">HUMMINGBIRD</p>
            <p className="text-3xs sm:text-2xs lg:text-xs">EAGLE</p>
          </div>
          <div>
            <p className="text-2xs pb-1 sm:text-xs lg:text-xl xl:pb-2">
              ABOUT US
            </p>
            <p className="text-3xs sm:text-2xs lg:text-xs">THE BOARD</p>
          </div>
          <div>
            <p className="text-2xs pb-1 sm:text-xs lg:text-xl xl:pb-2">
              CONTACT US
            </p>
            <div className="flex flex-row gap-1 sm:gap-2 sm:text-xl lg:gap-3 lg:text-3xl">
              <Link href="https://www.instagram.com/ucruas/" target="_blank">
                <FaInstagram />
              </Link>
              <Link
                href="https://discord.com/invite/kZEffPXGdf"
                target="_blank"
              >
                <FaDiscord />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCA_mA6Pb9oEWpgsEbaSRi9w"
                target="_blank"
              >
                <FaYoutube />
              </Link>
              <Link href="mailto:ucruas@gmail.com" target="_blank">
                <FaEnvelope />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-9">
          <div className="col-span-4 col-start-6">
            <Image
              src={Logo}
              alt="Club Logo with Purple Ring"
              className="pr-4 pt-16 sm:pr-8 sm:pt-24 lg:pr-12 lg:pt-32"
              width={1817}
              height={569}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
