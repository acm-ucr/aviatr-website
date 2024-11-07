import { Instagram, Youtube, Mail } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/images/Logo.webp";

const Footer = () => {
  return (
    <div className="mt-[4%]">
      <hr className="xl:mb-[3%] mx-[3%] mb-[5%] mt-2 border-t-2"></hr>
      <div className="sm:grid sm:grid-cols-2">
        <div className="sm:mx-0 sm:ml-[12%] sm:grid sm:grid-cols-3 lg:font-normal mx-[6%] flex justify-between whitespace-nowrap font-jost text-white">
          <div>
            <p className="md:pb-2 md:text-xl lg:pb-3 lg:text-3xl pb-1.5 text-sm">
              PROJECTS
            </p>
            <div className="md:text-sm lg:text-lg text-xs">
              <p>PROJECT PUFFIN</p>
              <p>HUMMINGBIRD</p>
              <p>EAGLE</p>
            </div>
          </div>
          <div>
            <p className="md:pb-2 md:text-xl lg:pb-3 lg:text-3xl pb-1.5 text-sm">
              ABOUT US
            </p>
            <p className="md:text-sm lg:text-lg text-xs">THE BOARD</p>
          </div>
          <div>
            <p className="md:pb-2 md:text-xl lg:pb-3 lg:text-3xl pb-1.5 text-sm">
              CONTACT US
            </p>
            <div className="md:gap-3 lg:gap-5 flex flex-row gap-1.5">
              <Link href="/" target="_blank">
                <Instagram
                  className="md:h-8 md:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1}
                />
              </Link>
              <Link href="https://discord.gg/87GntrMY" target="_blank">
                <SiDiscord className="md:h-8 md:w-8 lg:h-10 lg:w-10" />
              </Link>
              <Link href="https://www.youtube.com/@UCRAviatR" target="_blank">
                <Youtube
                  className="md:h-8 md:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1}
                />
              </Link>
              <Link href="mailto:ucr.aviatr@gmail.com" target="_blank">
                <Mail
                  className="md:h-8 md:w-8 lg:h-10 lg:w-10"
                  strokeWidth={1}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="sm:grid sm:grid-cols-9">
          <div className="sm:col-span-4 sm:col-start-6">
            <Image
              src={Logo}
              alt="Club Logo with Purple Ring"
              className="sm:pl-0 sm:pr-[13.5%] sm:pt-[82.5%] lg:pt-[50%] 2xl:pt-[30%] mb-[5%] pl-[75%] pr-[3%]"
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
