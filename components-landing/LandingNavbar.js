import Image from "next/image";
// import './landingGlobal.css';
// import './styles.css';

import { useState } from "react";
import styles from "./LandingNavbar.module.css";
import style from "./styles.module.css";


const LandingNavbar = ({scrollToRef, howItWorksRef,LandingThirdRef , HeroRef}) => {
    const [menu, setMenu] = useState(false);

    return (
        <>
            {/* leptup sacreen */}

            <>
            <div className=" max-sm:hidden bg-black" >
            <div className='h-[10vh] w-full flex bg-black justify-center max-lg:hidden z-50 fixed' >
                <div className="w-90p h-full flex justify-between items-center text-white">
                    <div className="flex w-50p gap-20 items-center">
                        <h2 onClick={() => scrollToRef(HeroRef)} className="max-lg:text-sm max-xl:text-xl  text-3xl font-bold font-poppins flex gap-3 cursor-pointer">

                            <Image src="/logo (3).png" height={30} width={30} />
                            recruitinn.ai
                        </h2>

                        <ul className="flex gap-10 max-xl:gap-3 max-xl:w-[70%]">
                            <li onClick={() => scrollToRef(howItWorksRef)} className="text-md font-semibold max-xl:text-sm cursor-pointer ">How It Works</li>
                            <li onClick={() => scrollToRef(LandingThirdRef)} className="text-md font-semibold max-xl:text-sm cursor-pointer ">About Us</li>
                        </ul>
                    </div>
                    <div className="w-60p items-center flex justify-end gap-4 max-xl:gap-2">
                            <span className="text-md max-xl:text-sm font-semibold cursor-pointer"><a href="https://www.recruitinn.ai/candidate-self"> Apply As A Candidate</a></span>
                            <div className="flex gap-8 max-xl:gap-2">
                            <div className={`${styles.dropdown} px-10 py-3.5 text-mnmd max-xl:text-sm bg-darkPurple rounded-3xl fnt-semibold`}>Login
                            <ul className={styles.dropdown_menu}>
                                <li><a href="https://app.recruitinn.ai/candidate-self">Login As Candidate</a></li>
                                <li><a href="https://app.recruitinn.ai/client-login">Login As Client</a></li>
                            </ul>
                            </div>
                            <a href="https://app.recruitinn.ai/client-login"><button className="px-10 py-3.5 text-md max-xl:text-sm btn-gradient rounded-3xl font-semibold">Recruit A Talent</button></a>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </>
            {/* mobile de screen buthur */}
            <div className="h-[10vh] bg-black" >
            <div className='h-[10vh] bg-black z-50 w-full flex max-lg:items-center max-lg:justify-center hidden max-lg:flex fixed '>
                <div className="w-100p h-[2rem] flex flex-col max-sm:justify-between max-sm:items-center text-white ">
                    <div className="flex w-[100%] justify-between items-center">
                        <div className="flex items-center gap-3 max-lg:ml-[1.5rem] max-sm:ml-[1rem]">
                            <Image src="/logoo.svg" height={30} width={30} alt="logo"/>
                            <h2 className="text-2xl max-sm:text-xl font-bold font-poppins">recruitinn.ai</h2>
                        </div>
                        <div className="max-lg:flex hidden max-lg:mr-[1.5rem] max-sm:mr-[1rem]" onClick={() => setMenu(!menu)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </div>
                    </div>  

                    <div className={`flex items-center gap-8 ${menu ? "flex" : "hidden"} max-lg:hidden`}>
                        <span className="text-sm font-semibold">Apply As An Engineer</span>
                        <div className="flex gap-8">
                            <button className="px-10 py-3.5 text-sm bg-darkPurple font-semibold sm:rounded-3xl">Login</button>
                            <button className="px-10 py-3.5 text-sm btn-gradient font-semibold sm:rounded-3xl">Recruit A Talent</button>
                        </div>
                    </div>

                    {menu && (
                        <div className="absolute top-[100%]  z-50  flex flex-col justify-center items-center gap-4 max-lg:flex w-full  left-0 bg-black py-4">
                            <span className="text-sm font-semibold text-white max-lg:py-2 max-lg:border-b max-lg:border-darkPurple">Apply As An Engineer</span>
                            <button className="px-10 py-3.5 max-lg:py-2 max-lg:border-b max-lg:border-darkPurple text-sm bg-transparent font-semibold max-lg:block hidden">Login</button>
                            <button className="px-10 py-3.5 max-lg:py-2 text-sm bg-transparent max-lg:border-b max-lg:border-darkPurple font-semibold max-lg:block hidden">Recruit A Talent</button>
                            <ul className="flex flex-col items-center gap-4">
                                <li onClick={() => scrollToRef(howItWorksRef)} className="text-sm font-semibold    p-2 max-lg:border-b max-lg:border-darkPurple">How It Works</li>
                                <li className="text-sm font-semibold p-2 max-lg:border-b max-lg:border-darkPurple">About Us</li>
                            </ul>
                        </div>  
                    )}
                </div>
            </div>
            </div>
        </>
    );
};

export default LandingNavbar;



// import { useState } from   'react';
// import Image from "next/image";

// const LandingNavbar = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

//     return (
//         <>
//             <div className='h-[10vh] w-full flex justify-center'>
//                 <div className="flex flex-col max-sm:flex-row w-full max-sm:w-90p h-full justify-between items-center text-white px-4 max-sm:px-0">
//                     <div className="w-full flex justify-between items-center">
//                         <h2 className="text-base max-sm:text-xl font-bold font-poppins flex gap-3 items-center">
//                             <Image src="/logoo.svg" height={30} width={30} alt="logo" />
//                             recruitinn.ai
//                         </h2>

//                         {/* Hamburger Menu Icon */}
//                         <button className="max-sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
//                         </button>
//                     </div>

//                     {/* Conditional rendering of menu based on isMenuOpen state */}
//                     <div className={`${isMenuOpen ? 'flex' : 'hidden'} max-sm:flex flex-col max-sm:flex-row w-full max-sm:w-auto justify-between max-sm:justify-end items-center gap-4 max-sm:gap-20 mt-4 sm:mt-0`}>
//                         <ul className="flex flex-col max-sm:flex-row gap-4 max-sm:gap-10">
//                             <li className="text-sm font-semibold">How It Works</li>
//                             <li className="text-sm font-semibold">About Us</li>
//                         </ul>
                        
//                         <div className="flex flex-col sm:flex-row gap-4 max-sm:gap-8">
//                             <span className="text-sm font-semibold block max-sm:hidden">Apply As An Engineer</span>
//                             <button className="px-4 max-sm:px-10 py-2 sm:py-3.5 text-xs max-sm:text-sm bg-darkPurple rounded-3xl font-semibold">Login</button>
//                             <button className="px-4 max-sm:px-10 py-2 sm:py-3.5 text-xs max-sm:text-sm btn-gradient rounded-3xl font-semibold">Recruit A Talent</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default LandingNavbar;

// import React, { useState } from "react";
// import { Link, scroller } from "react-scroll";
// import "./Navbar.css";
// import logo from "../../assets/logo.png";
// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };
//   const scrollToSection = (sectionId) => {
//     const offset = document.querySelector('nav').offsetHeight;
//     scroller.scrollTo(sectionId, {
//       duration: 800,
//       delay: 0,
//       smooth: "easeInOutQuart",
//       offset: -offset - 50,
//     });
//     // Close the mobile menu after clicking on a link
//     setMobileMenuOpen(false);
//   };
//   return (
//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 nav">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link
//           to="Overview"  
//           smooth={true}
//           duration={800}
//           className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
//         >
//           <img src={logo} className="h-8" alt="Coventech Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//             Co-ventech
//           </span>
//         </Link>
//         <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//           <Link
//             to="/get-quotes"
//             smooth={true}
//             duration={800}
//             onClick={() => scrollToSection("Contact")}
//           >
//             <button
//               type="button"
//               className="text-white bg-secondary hover:bg-secondary-800 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-lg text-md px-8 py-2 text-center dark:bg-secondary-600 dark:hover:bg-secondary-700 dark:focus:ring-secondary-800 hover:bg-primary hover:text-secondary transition-all duration-500"
//             >
//               Get Quotes
//             </button>
//           </Link>
//           <button
//             data-collapse-toggle="navbar-sticky"
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="navbar-sticky"
//             aria-expanded="false"
//             onClick={toggleMobileMenu}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <div
//           className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
//             mobileMenuOpen ? "block" : "hidden"
//           }`}
//           id="navbar-sticky"
//         >
//           <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li className="border-white px-4 py-1 rounded-md bg-primary">
//               <Link
//                 to="Overview"
//                 smooth={true}
//                 duration={800}
//                 spy={true}
//                 activeClass="active"
//                 className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer"
//                 onClick={() => scrollToSection("Overview")}
//               >
//                 Overview
//               </Link>
//             </li>
//             <li className="border-white px-4 py-1 rounded-md">
//               <Link
//                 smooth={true}
//                 duration={800}
//                 spy={true}
//                 activeClass="active"
//                 onClick={() => scrollToSection("Projects")}
//                 className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer"
//               >
//                 Portfolio
//               </Link>
//             </li>
//             <li className="border-white px-4 py-1 rounded-md">
//               <Link
//                 smooth={true}
//                 duration={800}
//                 spy={true}
//                 activeClass="active"
//                 onClick={() => scrollToSection("Services")}
//                 className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer"
//               >
//                 Services
//               </Link>
//             </li>
//             <li className="border-white px-4 py-1 rounded-md">
//               <Link
//                 smooth={true}
//                 duration={800}
//                 spy={true}
//                 activeClass="active"
//                 onClick={() => scrollToSection("About")}
//                 className="block py-2 px-3 text-gray-900 rounded md:hover:text-secondary md:p-0 cursor-pointer"
//               >
//                 About Us
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;