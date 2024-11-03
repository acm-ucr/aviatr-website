import Image from "next/image";
import RecurringImg from "@/images/Logo.webp";

const RecurringLogo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center rounded-full bg-white py-[4.5%]">
          <Image
            src={RecurringImg}
            alt="RecurringLogo"
            width={687}
            height={376}
          />
      </div>
    </div>
  );
};

export default RecurringLogo;
