import { useState ,useEffect } from "react";
import Image from "next/image";
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";


const images = [
    "/side-screen.png",
    "/MiddleContent.png",
    "/MiddleContent (1).png",
    "/side-screen.png",
]
const HowItWorks = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        { title: 'Your Requirements', description: 'Where you can specify your required skills & expertise' },
        { title: 'Candidate Selection', description: 'Where you can specify your required skills & expertise' },
        { title: 'Interview Engineer', description: 'Where you can specify your required skills & expertise' },
        { title: 'Onboarding', description: 'Where you can specify your required skills & expertise' },
      ];
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [items.length]);

      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);
    
        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [images.length]);

    return (
        <>
            <div className="w-100p h-[100%] flex flex-col items-center justify-center mb-[2rem] text-white">
                <div className="w-90p h-10p flex justify-between items-center mt-[2rem]">
                    <div className="w-40p max-lg:w-50p h-[100%] text-white">
                        <h2 className="text-3xl font-sans font-semibold max-lg:text-xl">
                            How It Works
                        </h2>
                        <p className="text-[0.75rem] text-smallText">
                            All new experience to get the things done in few easy steps
                        </p>
                    </div>

                    <div className="w-40p h-[100%] text-white flex items-center justify-end">
                        <button className="text-[0.75rem] max-lg: rounded-3xl py-3 px-6 btn-gradient font-sans font-semibold" >Recruit A Talent</button>
                    </div>
                </div>

                <div className="w-[100%] h-80p flex flex-col items-center gap-4 text-white">

                <div className=" w-[100%] h-[100%] max-md:h-[100%] max-md:items-center flex max-lg:flex-col justify-center mt-7">
                    <div className={`${style['fourth-sec-gradient']} rounded-l-3xl max-md:rounded-3xl w-[90%] `}>
                        <div className="w-100p h-70p max-md:h-[100%]  flex max-lg:items-center justify-between">
                            <div className="w-[35%] max-lg:w-[100%] h-100p flex justify-center items-center">
                            <ul className="w-[90%]">
                            {items.map((item, index) => (
                                <li key={index} className={`flex gap-3 py-5 ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}>
                                <Image src='/toBeSeleted.svg' width={30} height={30} />
                                <div className="max-lg:w-[100%]">
                                    <h3 className="max-lg:w-[100%] text-2xl font-sans font-semibold">{item.title}</h3>
                                    <p className="text-[0.75rem] text-smallText">{item.description}</p>
                                </div>
                                </li>
                            ))}
                            </ul>
                                {/* <ul className="w-[90%]">
                                    <li className="flex  gap-3 py-5">
                                    <Image src='/toBeSeleted.svg' width={30} height={30} />
                                        <div className="max-lg:w-[100%]">
                                            <h3 className="max-lg:w-[100%] text-2xl font-sans font-semibold">Your Requirements</h3>
                                            <p className="text-[0.75rem] text-smallText">Where you can specify your required skills & expertise</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 py-5">
                                        <Image src='/toBeSeleted.svg' width={30} height={30} />
                                        <div>
                                            <h3 className="text-2xl font-sans font-semibold">Candidate Selection</h3>
                                            <p className="text-[0.75rem] text-smallText">Where you can specify your required skills & expertise</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 py-5" >
                                    <Image src='/toBeSeleted.svg' width={30} height={30} />
                                        <div>
                                            <h3 className="text-2xl font-sans font-semibold">Interview Engineer</h3>
                                            <p className="text-[0.75rem] text-smallText">Where you can specify your required skills & expertise</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3 py-5">
                                    <Image src='/toBeSeleted.svg' width={30} height={30} />
                                        <div>
                                            <h3 className="text-2xl font-sans font-semibold">Onboarding</h3>
                                            <p className="text-[0.75rem] text-smallText">Where you can specify your required skills & expertise</p>
                                        </div>
                                    </li>
                                </ul> */}
                            </div>
                            <div className="w-[70%] h-100p max-md:hidden  flex justify-end items-end">
                            <div className="w-[100%] h-[45rem] flex justify-end items-end">
      <img
        src={images[currentImageIndex]}
        className="rounded-r-3xl"
        alt={`Image ${currentImageIndex + 1}`}
        width={800}
        height={100}
      />
    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default HowItWorks;