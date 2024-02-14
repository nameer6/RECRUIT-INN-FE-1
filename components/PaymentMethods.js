"use client";
import PaymentCard from "./PaymentCard";
import styles from "./PaymentMethods.module.css";
import Image from "next/image";
// import { checkout } from "@/Checkout";
export default function PaymentMethods() {
    return (
        <div className="w-[100%] h-[100%] flex flex-col items-center max-md:text-center">
            <div className="w-9/10 h-1/2">
                <h1 className="text-4xl font-bold">Packages</h1>
                <p className="text-base">Our flexible pricing options are tailored to your needs</p>
                <div className="text-center">
                    <div className="inline-block relative bg-[#F8F7FA] border border-black rounded-full p-1">
                        <input type="radio" name="duration-1" value="monthly" id="monthly-1" className="sr-only" defaultChecked />
                        <label htmlFor="monthly-1" className="inline-block w-20 h-10 leading-10 cursor-pointer text-base">Monthly</label>

                        <input type="radio" name="duration-1" value="yearly" id="yearly-1" className="sr-only" />
                        <label htmlFor="yearly-1" className="inline-block w-20 h-10 leading-10 cursor-pointer text-base">Yearly</label>

                        <span className="absolute top-1 left-1 h-10 w-20 bg-gradient-to-r from-[#6137DB] to-[#220772] rounded-full transform transition-transform duration-500 ease-in-out"></span>
                    </div>
                </div>
            </div>
            <div className="flex h-[100%] w-[100%] mb-[3rem] max-md:hidden">
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} />
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} />
                <PaymentCard bgColor={'payment-pro-gradient'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={'bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} />
                <PaymentCard bgColor={'payment-enterprise-gradient'} headingColor={'text-goldenTextColor'} smallTextColor={'text-goldenLightText'} borderColor={'border-goldenTextColor'} bg={'btn-golden'} img={'/Gold-Include.png'} priceColor={'golden-gradient-text'} />
            </div>
            {/* mobile screnn */}
            <div className="hidden max-md:block">
            <div className="flex h-[100%] w-[100%] mb-[3rem] max-md:text-center">
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} /> 
            </div>
            <div className="flex h-[100%] w-[100%] mb-[3rem] max-md:text-center">
                <PaymentCard bgColor={'bg-black'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={' bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} />
            </div>
            <div className="flex h-[100%] w-[100%] mb-[3rem] max-md:text-center">
                <PaymentCard bgColor={'payment-pro-gradient'} headingColor={'text-lightPurpleText'} smallTextColor={'text-lightText'} borderColor={'border-somePurple'} bg={'bg-darkPaymentPurple'} img={'/included.png'} priceColor={'gradient-text'} />
            </div>
            <div className="flex h-[100%] w-[100%] mb-[3rem] max-md:text-center">
                <PaymentCard bgColor={'payment-enterprise-gradient'} headingColor={'text-goldenTextColor'} smallTextColor={'text-goldenLightText'} borderColor={'border-goldenTextColor'} bg={'btn-golden'} img={'/Gold-Include.png'} priceColor={'golden-gradient-text'} />
            </div>
            </div>
        </div>
    );
}