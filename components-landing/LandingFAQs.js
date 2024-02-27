import Image from "next/image";
import { useState } from "react";
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";


const LandingFAQs = () => {

    const [dropDownState, setDropDownState] = useState(false);
    const [secondDropDownState, setSecondDropDownState] = useState(false);
    const [thirdDropDownState, setThirdDropDownState] = useState(false);
    const [fourthDropDownState, setFourthDropDownState] = useState(false);
    const [fifthDropDownState, setFifthDropDownState] = useState(false);
    const [sixthDropDownState, setSixthDropDownState] = useState(false);
    const [seventhDropDownState, setSevethDropDownState] = useState(false);

    const toggleDropDown = () => {
        setDropDownState(!dropDownState)
    }

    const toggleSecondDropDown = () => {
        setSecondDropDownState(!secondDropDownState)
    }

    const toggleThirdDropDown = () => {
        setThirdDropDownState(!thirdDropDownState)
    }

    const toggleFourthDropDown = () => {
        setFourthDropDownState(!fourthDropDownState)
    }

    const toggleFifthDropDown = () => {
        setFifthDropDownState(!fifthDropDownState)
    }

    const toggleSixthDropDown = () => {
        setSixthDropDownState(!sixthDropDownState)
    }

    return (
        <>
            <div className="h-auto w-[100%]  max-md:items-center flex justify-center text-white items-center flex-col">
                <div className="h-100p w-100p mb-[2rem] flex justify-center text-white items-center flex-col ">
                    <div className="h-[20%] w-[90%] flex flex-col items-center justify-center">
                        <h2 className="text-4xl font-sans font-semibold">FAQs</h2>
                        <p className="text-sm mt-3 text-smallText">Answers to the most frequently asked questions.</p>


                    </div>
                    <div className="w-[50%] h-[70%] mt-[1rem] max-md:w-[90%]">
                        <ul className="w-[100%] ">
                            <li className="py-4  w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between gap-2">
                                    <span className="text-lg tracking-wide font-semibold font-sans">What's recruitinn?</span>
                                    <Image onClick={toggleDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    dropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li>
                            <li className="py-4 w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">How does the free trial work?</span>
                                    <Image onClick={toggleSecondDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    secondDropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li>
                            <li className="py-4 w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">Will the engineer work directly for me?</span>
                                    <Image onClick={toggleThirdDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    thirdDropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li>
                            <li className="py-4 w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">How does billing work?</span>
                                    <Image o    nClick={toggleFourthDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    fourthDropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li><li className="py-4 w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">How are you different?</span>
                                    <Image onClick={toggleFifthDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    fifthDropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li>
                            <li className="py-4 w-[100%] flex flex-col border-b-[1px] border-darkPurple">
                                <div className=" w-[100%] flex justify-between">
                                    <span className="text-lg tracking-wide font-semibold font-sans">What technologies do recruitinn developers know?</span>
                                    <Image onClick={toggleSixthDropDown} src='/dropdown-white.svg' width={15} height={15} />
                                </div>
                                {
                                    sixthDropDownState && <p className="text-sm  text-smallText mt-3">
                                        We help companies hire world-class engineers through our talent pool of vetted engineers,
                                        micro1 Talent, and our software development agency, microLab. We're also building gpt-vetting,
                                        an AI tool for vetting top talent.
                                    </p>
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingFAQs;