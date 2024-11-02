import Image from "next/image";
import RecurringImg from "@/images/Logo.webp";

const RecurringLogo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-96 w-auto items-center justify-center rounded-full bg-white p-4">
        <div className="flex items-center justify-center">
          <Image
            src={RecurringImg}
            alt="RecurringLogo"
            width={687}
            height={376}
          />
        </div>
      </div>
    </div>
  );
};

export default RecurringLogo;
