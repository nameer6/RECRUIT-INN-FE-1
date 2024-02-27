import Image from "next/image";
import CodingLeftComponent from "../../components-landing/CodingLeftComponent";
import ContentEditor from "../../components-landing/ContentEditor";
import { useEffect, useState } from "react";



const CodingExcersice = () => {

    const [Code,setCode] = useState(null);
    const [language , setLanguage] = useState(null);

    useEffect (() => {
        console.log("code:",Code);
    },[Code])

        async function executeCode(){
            const reqBody = {
                language : language,
                versionIndex : 1,
                script : Code
            }   

            console.log("req body:", reqBody)
    
            const response = await fetch("http://localhost:3002/v1/execute-code",{
                method: 'POST',
                body: JSON.stringify(reqBody),
                headers: {'Content-type' : 'application/json'}
            });
            const data = await response.json();
            console.log('response: ',data)
        }

    return (
        <>
            <div className="w-full h-screen bg-[#F5F5F5] justify-center items-center flex">
                <div className="w-[98%] h-[100%] items-center flex justify-between">
                    <CodingLeftComponent />

                    <div className="w-[70%] h-[95%] flex flex-col justify-between ">
                        <div className="w-[100%] flex flex-col items-center h-[63%] rounded-2xl bg-[#fff]">
                            <div className="w-[100%] h-[4rem] flex justify-center">
                                <div className="w-[95%] h-[100%] border-b-[1px] border-[#EBEBEB] flex items-center gap-2">
                                    <span className="bg-[#F0EDFC] py-[0.25rem] px-3 rounded-2xl text-sm font-semibold text-[#6137DB]">Code</span>
                                    <select className="bg-[#F0EDFC] py-[0.35rem] px-3 rounded-2xl text-sm font-semibold text-[#4A525D]">
                                        <option value="python3">
                                            Python
                                        </option>
                                        <option value="java">
                                            Java
                                        </option>
                                        <option value="nodejs">
                                            Node JS
                                        </option>
                                        <option value="c">
                                            C
                                        </option>
                                    </select>
                                    <span className="bg-[#6137DB] py-[0.25rem] flex items-center px-3 rounded-2xl text-sm font-semibold text-[#F0EDFC] gap-2"><Image src='/timer.svg' height={12} width={12} />09:59</span>
                                </div>
                            </div>

                            <div className="h-[80%] w-[95%] flex flex-col items-center">
                                <textarea onChange={(e) => setCode(e.target.value)} className="h-[85%] max-h-[90%] w-[100%] outline-none">

                                </textarea>
                                {/* <ContentEditor /> */}

                                <div className="w-[100%] h-[20%] flex justify-end items-center gap-4">
                                    <button onClick={executeCode} className="flex items-center gap-3 py-4 px-4 bg-[#F8F7FA] rounded-3xl font-semibold font-sans"><Image src='/playBlack.svg' height={15} width={15} />Run</button>
                                    <button className="flex w-[20%] justify-between items-center gap-3 rounded-3xl py-4 px-4 font-sans font-semibold  text-white bg-[#6137DB]">Submit <Image src='/Tick.svg' height={15} width={15} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="w-[100%] h-[35%] rounded-2xl bg-[#fff]">
                            <div className="w-[95%] h-[4rem] flex justify-center">
                                <div className="w-[95%] h-[100%] border-b-[1px] border-[#EBEBEB] flex items-center">
                                    <span className="bg-[#F0EDFC] py-1 px-3 rounded-2xl text-sm font-semibold text-[#6137DB]">Test Result</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CodingExcersice;