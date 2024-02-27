"use client";
import 'tailwindcss/tailwind.css';
import PaymentCard from "../components/PaymentCard";
import styles from "./PaymentMethods.module.css";
import Image from "next/image";
import { useState } from "react";
import style from "./styles.module.css";
// import './landingGlobal.css';

// import { checkout } from "@/Checkout";
export default function PaymentMethods() {

    const [selectedOption, setSelectedOption] = useState('monthly');
    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center max-md:text-center">
            <div className="w-9/10 max-md:w-[90%] h-1/2">
                <h1 className="text-4xl font-bold text-center text-white mb-4">Packages</h1>
                <p className="text-base text-gray-500 mb-8 max-lg:mb-4">Our flexible pricing options are tailored to your needs</p>
                <div className="text-center ">
                    <div className="inline-block relative w-[55%] py-1  bg-[#141414] max-md:mb-4 text-white border border-black rounded-full">
                        <input
                            type="radio"
                            name="duration"
                            value="monthly"
                            id="monthly"
                            className="sr-only"
                            checked={selectedOption === 'monthly'}
                            onChange={() => setSelectedOption('monthly')}
                        />
                        <label
                            htmlFor="monthly"
                            className={`text-sm font-sans inline-block w-20 h-10 leading-10 cursor-pointer  z-10 ${selectedOption === 'monthly' ? 'w-50p bg-gradient-to-r from-[#6137DB] to-[#220772] rounded-full' : ''}`}
                        >
                            Monthly
                        </label>

                        <input
                            type="radio"
                            name="duration"
                            value="yearly"
                            id="yearly"
                            className="sr-only"
                            checked={selectedOption === 'yearly'}
                            onChange={() => setSelectedOption('yearly')}
                        />
                        <label
                            htmlFor="yearly"
                            className={`inline-block font-sans text-sm w-20 h-10 leading-10 cursor-pointer  z-10 ${selectedOption === 'yearly' ? 'w-50p bg-gradient-to-r from-[#6137DB] to-[#220772] rounded-full' : ''}`}
                        >
                            Yearly
                        </label>
                    </div>
                    {/* <div className="inline-block relative bg-gray-900 mb-[2rem] text-white border border-black rounded-full p-1">
                        <input
                            type="radio"
                            name="duration"
                            value="monthly" 
                            id="monthly"
                            className="sr-only"
                            checked={selectedOption === 'monthly'}
                            onChange={() => setSelectedOption('monthly')}
                        />
                        <label htmlFor="monthly" className="inline-block w-20 h-10 leading-10 cursor-pointer text-base z-50">
                            Monthly
                        </label>

                        <input
                            type="radio"
                            name="duration"
                            value="yearly"
                            id="yearly"
                            className="sr-only"
                            checked={selectedOption === 'yearly'}
                            onChange={() => setSelectedOption('yearly')}
                        />
                        <label htmlFor="yearly" className="inline-block w-20 h-10 leading-10 cursor-pointer text-base z-50">
                            Yearly
                        </label>

                        <span
                            className={`z-0 absolute top-1 left-1 h-10 w-20 bg-gradient-to-r from-[#6137DB] to-[#220772] rounded-full transform transition-transform duration-500 ease-in-out ${selectedOption === 'yearly' ? 'translate-x-20' : ''
                                }`}
                        ></span>
                    </div> */}
                </div>
            </div>
            <div className="flex h-[100%] w-[90%] mb-[3rem] max-md:hidden ">
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                <PaymentCard bgColor={'payment-pro-gradient'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={'bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                <PaymentCard bgColor={`${style['payment-enterprise-gradient']}`} headingColor={'text-goldenTextColor'} smallTextColor={'text-goldenLightText'} borderColor={'border-goldenTextColor'} bg={'btn-golden'} img={'/Gold-Include.png'} priceColor={ style['golden-gradient-text']} />
            </div>
            {/* mobile screnn */}
            <div className="hidden max-md:block">
                <div className="flex h-[100%] w-[100%] flex-col items-center mb-[3rem] max-md:text-center">
                    <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                </div>
                <div className="flex h-[100%] w-[100%] flex-col  mb-[3rem] items-center max-md:text-center">
                    <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                </div>
                <div className="flex h-[100%] w-[100%] flex-col  mb-[3rem] items-center max-md:text-center">
                    <PaymentCard bgColor={'payment-pro-gradient'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={'bg-darkPaymentPurple'} img={'/included.png'} priceColor={style['gradient-text']} />
                </div>
                <div className="flex h-[100%] w-[100%] flex-col  mb-[3rem] items-center max-md:text-center">
                    <PaymentCard bgColor={'payment-enterprise-gradient'} headingColor={'text-goldenTextColor'} smallTextColor={'text-goldenLightText'} borderColor={'border-goldenTextColor'} bg={'btn-golden'} img={'/Gold-Include.png'} priceColor={ style['golden-gradient-text']} />
                </div>
            </div>
        </div>
    );
}