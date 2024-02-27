import TrustedCandidates from "../components/TrustedCandidates";
import Image from "next/image";
import Link from "next/link";
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";


const HeroSection = () => {

    return (
        <>
            <div className="w-full h-[80vh] flex flex-col items-center">
                <div className="w-90p h-full flex justify-center">
                    <div className="w-50p h-full flex flex-col justify-center gap-8 max-lg:w-[100%] max-lg:text-center max-lg:items-center">
                        <h1 className="text-white text-5xl font-bold w-[80%]">
                            Recruit the best In-Field talent now for your projects
                        </h1>

                        <Link href="https://app.recruitinn.ai/client-login"><button className={`max-md:mx-auto px-10 py-3.5 text-sm ${style['btn-gradient']} rounded-3xl font-semibold w-[15rem] text-white`}>Recruit Now</button></Link>
                    </div>

                    <div className=" w-50p h-full max-lg:hidden">
                        <div className="w-50p h-full ">
                            <div className=" absolute h-[80%] w-[50%] flex" >

                                <div className="bg-themePurple h-[5rem] w-[5rem] relative left-[14rem] top-[15rem] rounded-full ">
                                </div>

                                <div className="bg-themePurple h-[5rem] w-[5rem] relative top-[24rem] left-[13rem] rounded-full">
                                </div>

                                <div className="bg-themePurple h-[5rem] w-[5rem] relative left-[15rem] top-[6rem] rounded-full">
                                </div>

                                <div className={`w-100p h-full ${style['blurred-overlay']} flex relative`}>

                                    <div className={`flex gap-3 items-center text-white w-[13rem] h-[3rem] border-2 ${style['background-gradient']} border-themePurple absolute left-[4rem] top-[39%] rounded-md`}>
                                        <div className="ml-2 px-[0.4rem] py-[0.25rem] bg-darkPurple overflow-hidden rounded-md" >
                                            <Image src='/Bitmoji.svg' width={20} height={20} />
                                        </div>

                                        <span className="text-sm" >Dwayne Johnson</span>
                                    </div>

                                    <div className={`flex gap-3 items-center text-white w-[13rem] h-[3rem] border-2 ${style['background-gradient']} border-themePurple absolute left-[15rem] top-[17%] rounded-md`}>
                                        <div className="ml-2 px-[0.4rem] py-[0.25rem] bg-darkPurple overflow-hidden rounded-md" >
                                            <Image src='/Bitmoji.svg' width={20} height={20} />
                                        </div>

                                        <span className="text-sm">Dwayne Johnson</span>
                                    </div>

                                    <div className={`flex gap-3 items-center text-white w-[13rem] h-[3rem] border-2 ${style['background-gradient']} border-themePurple left-[10rem] top-[61%] absolute rounded-md`}>
                                        <div className="ml-2 px-[0.4rem] py-[0.25rem] bg-darkPurple overflow-hidden rounded-md" >
                                            <Image src='/Bitmoji.svg' width={20} height={20} />
                                        </div>

                                        <span className="text-sm" >Dwayne Johnson</span>
                                    </div>

                                    <div className="w-80p justify-center flex flex-col space-y-8 mb-[6rem] ">
                                        <div className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                        <div  className={style['fade-border-b']}>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[90%]">
                    <TrustedCandidates />
                </div>
            </div>
        </>
    )
}

export default HeroSection;