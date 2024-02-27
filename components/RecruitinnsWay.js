import Image from "next/image";
import TraditionalWay from "./TraditionalWay";
import Recruitinn from "./Recruitinn";

const RecruitinnsWay = () => {

    return (
        <>
            <div className="h-[120vh] w-100p flex flex-col items-center mb-2rem ">
                <div className="w-[90%] h-[100%] recruit-inns-way-grad rounded-3xl flex flex-col items-center" >
                    <div className="h-40p">
                        <TraditionalWay />
                    </div>
                    <div className="h-[60%] w-100p flex justify-center items-center mb-2rem">
                        <Recruitinn />
                    </div>
                </div>

                {/* <div className="w-[90%] h-[95%]  rounded-3xl">
                    
                </div> */}
            </div>
        </>
    )
}

export default RecruitinnsWay;