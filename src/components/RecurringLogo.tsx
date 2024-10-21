import Image from "next/image";

const RecurringLogo = () => {
  return (
    <div className="flex justify-center">
      <div className="flex h-[376px] w-[687px] items-center justify-center rounded-full bg-white p-4">
        <div className="flex items-center justify-center">
          <Image
            src="\Images\Logo.webp"
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
