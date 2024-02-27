
import Image from "next/image";

const Recruitinn = () => {

    return (
        <>
            <div className="w-[100%] h-100p flex flex-col items-center gap-4 text-white">
                <h2 className="gradient-text text-4xl font-semibold font-sans">Recruitinn's Way</h2>
                <p className="text-sm text-smallText">All new experience to get the things done in few easy steps</p>
                <div className=" w-[100%] h-[80%] flex justify-end">
                    <div className="rounded-l-3xl w-[95%] recruitinn-div-grad">
                        <div className="w-100p h-100p flex">
                            <div className="w-[35%] h-100p flex justify-center items-center">
                                <div className="w-[70%] h-[70%] flex flex-col justify-center  gap-4">
                                    <Image src='/recruitinn-golden.svg' width={60} height={60} />
                                    <h2 className="text-2xl font-sans">GET THE TOP 1% TALENT 4X FASTER</h2>
                                    <p className="text-[0.75rem] text-smallText">Recruitinn's AI Assessment thoroughly vets all talents to align with your project's requirements, empowering you to handpick the skills you need.</p>
                                    <button className="py-2 px-4 btn-golden">Recruit A Talent</button>
                                </div>
                            </div>
                            <div className="w-[65%] h-100p flex justify-end items-end">
                                <div className=" w-[100%] h-[45rem] flex justify-end items-end">
                                    <Image src='/side-screen.png' width={800} height={100} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recruitinn;