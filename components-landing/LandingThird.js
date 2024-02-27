import CardDiv from "../components/CardDiv";
import TechstackOne from "../components/TechstackOne";
import TechstackTwo from "../components/TechstackTwo";
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";
import 'tailwindcss/tailwind.css';

const LandingThird = () => {


    return (
        <>
            <div className="h-[100vh] max-lg:h-100p w-full flex justify-center mb-[2rem]">
                <div className="w-90p max-lg:items-center max-lg:flex-col max-lg:h-[100%] flex justify-between items-center gap-5 ">
                    <div className={`w-[50%] max-lg:w-[100%] max-lg:h-[100%] h-100p  ${style['right-dv-gradient']} rounded-3xl flex flex-col items-center`}>
                        <div className="w-80p h-50p max-xl:h-[70vh] flex justify-center items-center relative">
                            <CardDiv className='top-[10rem]  max-xl:left-0 bg-elementGradOne border-[1px] border-themePurple max-md:left-[0rem] max-md:right-[10rem] max-md:top-[8rem] right-[8rem]' hoverEffect={false} />
                            <CardDiv className='top-[3rem]  max-xl:right-0 bg-elementGradOne border-[1px] max-md:top-[10rem] max-md:left-[10rem] border-themePurple left-[16rem]' hoverEffect={true} />
                        </div>

                        <div className="w-80p h-50p flex flex-col justify-center">
                            <span className="text-lightPurpleText font-semibold text-lg">
                                TALENTS
                            </span>
                            <h3 className="text-white text-4xl font-semibold mb-[2rem] gradient-text">
                                GET INTO TOUCH WITH WORLD’S BEST ENGINEERS
                            </h3>
                            <p className="text-white max-md:mb-[1rem]">
                                Forge connections with leading engineers for cutting-edge innovation and expertise.
                                This collaboration unlocks visionary solutions, propelling you to the forefront of engineering excellence for unparalleled success.
                            </p>
                        </div>
                    </div>

                    <div className="w-[50%] max-lg:mb-[1rem] max-lg:w-[100%] max-lg:h-[100%] h-100p bg-elementGradOne rounded-3xl flex flex-col items-center">
                        <div className="w-[100%] h-50p flex flex-col justify-center items-center relative mb-[1.5rem]">
                            <TechstackOne />
                            <TechstackTwo />
                        </div>

                        <div className="w-80p h-50p flex flex-col justify-center">
                            <span className="text-lightPurpleText font-semibold text-lg">
                                SKILLS
                            </span>
                            <h3 className="text-white text-4xl font-semibold mb-[2rem] gradient-text">
                                IN DEMAND SKILLS FOR MODERN TECHNOLOGIES
                            </h3>
                            <p className="text-white max-sm:mb-[1rem]">
                                Forge connections with leading engineers for cutting-edge innovation and expertise.
                                This collaboration unlocks visionary solutions, propelling you to the forefront of engineering excellence for unparalleled success.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingThird;