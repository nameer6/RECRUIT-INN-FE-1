import Image from "next/image";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const TraditionalWay = () => {

    const elementRef = useRef(null);



    return (
        <>
            <div className="w-[100%] h-[80%] flex flex-col items-center text-white gap-4 ">
                <h3 className="mt-3 gradient-text text-4xl tracking-wider font-sans font-semibold">Traditional Way</h3>

                <div className="container w-[95%] h-[100%] flex gap-3 mt-5  ">
                    <div className="w-40p flex justify-center">

                        <div className="h-[9rem] w-[100%] cards-gradient border-[1px] border-borderColor rounded-3xl flex justify-center items-center ">
                            <div className="w-90p h-90p py-2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold font-sans text-lightText">
                                        Countless Resume Screening
                                    </h3>
                                    <p className="text-[0.75rem] text-verySmallText">
                                        HR or hiring managers meticulously screen resumes to match candidates' skills and experience with job requirements.
                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <button className="px-5 py-[0.35rem] border-[1px] font-sans text-sm border-borderColor text-lightText rounded-2xl">
                                        100+ Resumes
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="w-40p flex justify-center items-end">
                        <div className="h-[9rem] w-[100%] card cards-gradient border-[1px] border-borderColor rounded-3xl element flex justify-center items-center ">
                            <div className="w-90p h-90p py-2  flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold font-sans text-lightText">
                                        Technical Interview
                                    </h3>
                                    <p className="text-[0.75rem] text-verySmallText">
                                        HR or hiring managers meticulously screen resumes to match candidates' skills and experience with job requirements.                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <button className="px-5 py-[0.35rem] border-[1px] font-sans text-sm border-borderColor text-lightText rounded-2xl">
                                        100+ Resumes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-40p flex justify-center items-center">
                        <div className="h-[9rem] w-[100%] cards-gradient rounded-3xl border-[1px] border-borderColor flex justify-center items-center ">
                            <div className="w-90p h-90p py-2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold font-sans text-lightText">
                                        Phone Screening                                    </h3>
                                    <p className="text-[0.75rem] text-verySmallText">
                                        Selected candidates undergo an in-depth phone interview to assess their qualifications, experience, and interest in the position.                                    </p>
                                </div>

                                <div className="flex justify-end">
                                    <button className="px-5 py-[0.35rem] border-[1px] font-sans text-sm border-borderColor text-lightText rounded-2xl">
                                        50+ Calls
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TraditionalWay;