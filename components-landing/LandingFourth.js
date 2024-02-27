    import Image from "next/image";
    // import './landingGlobal.css';
    // import './styles.css';
    import style from "./styles.module.css";


    const LandingFourth = () => {

        return (
            <>
                <div className="h-[100%] w-[100%] flex items-center justify-center mb-12">
                    <div className={`w-[90%] h-80p rounded-2xl ${style['fourth-sec-gradient']} py-4 flex items-center p-12`}>
                        <div className="w-50p h-80p fade-right-border flex items-center justify-center max-md:w-[100%]  max-md:text-center">
                            <div className="w-80p flex flex-col gap-5 text-white">
                                <h3 className="text-2xl tracking-wide">Discover more with Recruitinn's streamlined process</h3>
                                <p className="text-[0.75rem] text-smallText">Revolutionize your recruitment process with Reccruitinn's AI Assessment saving you valuable
                                    hours while ensuring top-notch candidate evaluations.
                                </p>
                                <div className="flex gap-3 w-[100%] max-xsm:gap-1">
                                    <div className="px-7 py-2 rounded-3xl bg-spanBg max-lg:px-3 max-lg:py-1">
                                        <span className="gradient-text text-2xl font-bold max-lg:text-base max-xsm:text-sm">24h</span>
                                    </div>
                                    <div className="px-7 py-2 rounded-3xl bg-spanBg max-lg:px-4 max-lg:py-1">
                                        <span className="gradient-text text-2xl font-bold max-lg:text-base max-xsm:text-sm">48h</span>
                                    </div>
                                    <div className="px-7 py-2 rounded-3xl bg-spanBg max-lg:px-4 max-lg:py-1">
                                        <span className="gradient-text text-2xl font-bold max-lg:text-base max-xsm:text-sm">72h</span>
                                    </div>
                                </div>

                                <h2 className="text-4xl w-50p font-bold leading-[3rem] gradient-text max-lg:w-100p">20+ Potential Candidates</h2>
                            </div>
                        </div>
                        <div className="w-50p h-80p flex items-start justify-center max-md:hidden">
                            <Image src='/clock.png' width={400} height={400} />
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default LandingFourth;