import { Instagram, Youtube, Mail } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/Logo.webp";

const Footer = () => {
  return (
    <div className="mt-[12%] md:mt-[10%]">
      <hr className="mx-[3%] mb-[5%] mt-2 border-t-2 xl:mb-[3%]"></hr>
      <div className="sm:grid sm:grid-cols-2">
        <div className="mx-[6%] flex justify-between whitespace-nowrap font-jost text-white sm:mx-0 sm:ml-[12%] sm:grid sm:grid-cols-3 lg:font-normal">
          <div>
            <p className="pb-1.5 text-sm md:pb-2 md:text-xl lg:pb-3 lg:text-3xl">
              PROJECTS
            </p>
            <div className="text-xs md:text-sm lg:text-lg">
              <p>PROJECT PUFFIN</p>
              <p>HUMMINGBIRD</p>
              <p>EAGLE</p>
            </div>
          </div>
          <div>
            <p className="pb-1.5 text-sm md:pb-2 md:text-xl lg:pb-3 lg:text-3xl">
              ABOUT US
            </p>
            <p className="text-xs md:text-sm lg:text-lg">THE BOARD</p>
          </div>
          <div>
            <p className="pb-1.5 text-sm md:pb-2 md:text-xl lg:pb-3 lg:text-3xl">
              CONTACT US
            </p>
            <div className="flex flex-row gap-1.5 md:gap-3 lg:gap-5">
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
        <div className="mr-[5%] flex justify-end md:mr-[8%]">
          <div className="my-10 mt-[5%] w-2/5 md:mt-[10%] xl:w-3/5 2xl:w-2/5">
            <div className="flex items-center justify-center rounded-full bg-white px-[1%] py-[4.5%]">
              <Image src={Logo} alt="RecurringLogo" width={687} height={376} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
