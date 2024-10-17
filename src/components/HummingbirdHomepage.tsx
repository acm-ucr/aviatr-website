import Image from "next/image";

const HummingbirdHomepage = () => {
    return (
        <div className="grid grid-cols-10 mx-[5%]">
            <div className="col-span-10 md:col-span-6">
                <Image
                    src="/homePage/hummingbird-image-1.webp"
                    alt="Front View of Drone"
                    className="w-full pb-[6%]"
                    width={754}
                    height={311}
                />
                <div className="grid grid-cols-8">
                    <div className="col-span-3">
                        <Image
                            src="/homePage/hummingbird-image-2.webp"
                            alt="Rudder of Drone"
                            className="w-full"
                            width={294}
                            height={363}
                        />
                    </div>
                    <div className="col-span-5">
                        <Image
                            src="/homePage/hummingbird-image-3.webp"
                            alt="Side View of Drone"
                            className="pl-[9%] w-full"
                            width={444}
                            height={363}
                        />
                    </div>
                    
                </div>
            </div>
            <div className="col-span-10 md:col-span-4 grid content-center">
                <p className="pb-10 text-center text-white">Title</p>
                <p className="mx-[10%] md:mx-0 md:pl-[24%] font-jost font-light text-white text-xs lg:text-sm xl:text-lg 2xl:text-2xl">
                    Project Hummingbird is a research team aimed at 
                    improving existing systems or creating new processes 
                    and mechanisms to pioneer the future. With the 
                    current team aimed at improving drone swarm/show 
                    technology, among a number of other projects in the 
                    works, Hummingbird stands at the forefront to jump 
                    from flower to flower of knowledge.
                </p>
                <p className="ml-[10%] md:ml-0 md:pl-[24%] pt-10 text-white">button</p>
            </div>
        </div>
    );
};

export default HummingbirdHomepage;