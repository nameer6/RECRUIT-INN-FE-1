import styles from './online-compiler.module.css';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';



const OnlineCompiler = () => {

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [version, setVersion] = useState('');
    const [output, setOutput] = useState('');
    const editorRef = useRef();

    useEffect(() => {
        console.log("code:", code);
        console.log("language", language);
    }, [code, language])

    const codeExecutionHandler = async () => {
        try {
            const reeBody = {
                script: code,
                language: language,
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/execute-code`,
                {
                    method: "POST",
                    body: JSON.stringify(reeBody),
                    headers: { "Content-Type": "application/json" }
                })

            const data = await response.json();
            console.log("data:", data);
            setOutput(data?.data?.data?.output);
        } catch (err) {
            console.log("error:", err);
        }
    }

    // useEffect(() => {
    //     const editor = CodeMirror(editorRef.current, {
    //       mode: language,
    //       lineNumbers: true
    //     });
    //   }, [language]);

    return (
        <>
            <div className={styles.superContainer}>
                <div className={styles.codeIDEcontainer}>
                    <div className={styles.codeContainer}>
                        <div className={styles.topBar}>
                            <h2>Write code here:</h2>
                            <div className={styles.btns}>
                                <select onChange={(e) => { setLanguage(e.target.value) }}>
                                    <option value="python3"> Python</option>
                                    <option value="nodejs">Node Js</option>
                                    <option value="c">C</option>
                                    <option value="php">Php</option>
                                    <option value="c#">C#</option>
                                    <option value="java">Java</option>
                                </select>
                                <button onClick={codeExecutionHandler}>Execute</button>
                            </div>
                        </div>

                        <textarea spellCheck={false} onChange={(e) => {
                            setCode(e.target.value)
                        }} className={styles.textEditor}>
                        </textarea>
                    </div>
                </div>

                <h2>OUTPUT:</h2>
                <div className={styles.outputContainer}>
                    {output}
                </div>
            </div>
        </>
    )
}

export default OnlineCompiler;