import React from "react";
import Image from "next/image";
import BMSLeftBorder from "@/../public/about/BMSLeftBorder.webp";
import DefaultBoardMemberImage from "@/../public/about/defaultBoardMemberImage.webp";
import LineImage from "@/../public/about/Line_20.webp";

interface MemberDetailProps {
    hobby: string;
    major: string;
    year: string;
    description: string;
    closePopup: () => void;
}

const MemberDetail: React.FC<MemberDetailProps> = ({hobby, major, year, description, closePopup}) => {

    return (
        <div className="text-accent relative mx-auto mb-10 p-10 bg-slate-800 rounded-3xl w-[60%]">
            {/* Close button */}
            <button 
                onClick={closePopup} 
                className="absolute top-20 right-20 text-white font-bold text-xl cursor-pointer font-bungee-hairline font-outline-2"
            >
                CLOSE
            </button>
            {/* Left & Right decorative borders */}
            <div className="h-25 w-25 absolute rotate-180 top-20 left-20">
                <Image src={BMSLeftBorder} alt="Border" />
            </div>
            <div className="h-25 w-25 absolute bottom-20 right-20">
                <Image src={BMSLeftBorder} alt="Border" />
            </div>

            {/* Main content */}
            <div className="flex flex-col gap-10 p-36">

                {/* Upper section: Image and Labels */}
                <div className="flex flex-row gap-10 justify-center items-center">
                    {/* Image section */}
                    <div className="w-[33%] flex-shrink-0">
                        <Image src={DefaultBoardMemberImage} alt="Member Image" className="rounded-2xl w-full h-auto" />
                    </div>
                    
                    {/* Details section */}
                    <div className="w-[67%] flex flex-col text-left text-white text-2xl font-jost">
                        <p className="mb-4"><strong className="text-aviatr-blue-500">Hobbies:</strong> {hobby}</p>
                        <p className="mb-4"><strong className="text-aviatr-purple-100">Major:</strong> {major}</p>
                        <p className="mb-4"><strong className="text-aviatr-pink-200">Year:</strong> {year}</p>
                        <Image src={LineImage} alt="Line" className="mt-6" />
                    </div>
                </div>

                {/* Lower section: Description */}
                <div className="text-left text-white text-xl overflow-hidden break-words font-jost">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default MemberDetail;
