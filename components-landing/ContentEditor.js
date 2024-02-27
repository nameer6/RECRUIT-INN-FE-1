import Image from "next/image";
import { useState, useEffect } from "react";
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";



const ContentEditor = () => {

    const [code, setCode] = useState('');
    const [lineNumbers, setLineNumbers] = useState('1');

    useEffect(() => {
        const numberOfLines = code.split('\n').length;
        const lineNumberString = Array.from({ length: numberOfLines }, (_, i) => i + 1).join('\n');
        setLineNumbers(lineNumberString);
    }, [code]);

    return (
        <>
            <div className="flex h-[60%] w-[100%]" >
                <div className="py-[0.25rem] px-3 text-right select-none bg-gray-200 text-gray-700">
                    <pre>{lineNumbers}</pre>
                </div>
                <div
                    contentEditable
                    className="flex-1 outline-none p-3"
                    onInput={(e) => setCode(e.currentTarget.textContent)}
                    style={{ whiteSpace: 'pre', minHeight: '100px', border: '1px solid #ccc', overflowY: 'scroll' }}
                    spellCheck={false}
                ></div>
            </div>
        </>
    )
}

export default ContentEditor;