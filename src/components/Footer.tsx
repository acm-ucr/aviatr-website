import { Instagram, Youtube, Mail } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <hr className="mx-[3%] mb-[5%] mt-2 border-t-2 xl:mb-[3%]"></hr>
      <div className="sm:grid sm:grid-cols-2">
        <div className="mx-[6%]cflex justify-between whitespace-nowrap font-jost font-light text-white sm:mx-0 sm:ml-[12%] sm:grid sm:grid-cols-3 lg:font-normal">
          <div>
            <p className="pb-1.5 text-sm md:pb-2 md:text-xl lg:pb-3 lg:text-3xl">
              PROJECTS
            </p>
            <p className="text-xs md:text-sm lg:text-lg">PROJECT PUFFIN</p>
            <p className="text-xs md:text-sm lg:text-lg">HUMMINGBIRD</p>
            <p className="text-xs md:text-sm lg:text-lg">EAGLE</p>
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
        <div className="sm:grid sm:grid-cols-9">
          <div className="sm:col-span-4 sm:col-start-6">
            <Image
              src="/footer/uas-logo-purple-ring.webp"
              alt="Club Logo with Purple Ring"
              className="pl-[75%] pr-[3%] sm:pl-0 sm:pr-[13.5%] sm:pt-[82.5%] lg:pt-[50%] 2xl:pt-[30%]"
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
