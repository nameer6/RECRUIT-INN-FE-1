import styles from './QuestionBox.module.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { dummyQuestions } from '@/data/dummyQuestions';
import { useRouter } from 'next/router';
import { useTest } from '@/contexts/QuestionsContent';


const QuestionBox = () => {
    const { test } = useTest();
    const router = useRouter();
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [completedQuestions, setCompletedQuestions] = useState([]);
    const [timeLeft, setTimeLeft] = useState(59);
    const [newQuestions, setNewQuestions] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioURLs, setAudioURLs] = useState({});
    const mediaRecorderRef = useRef(null);
    const recordedChunksRef = useRef([]);
    const [answers, setAnswers] = useState([]);
    const { id } = router?.query;
    const [recordingDone, setRecordingDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [disableRecordingButton, setDisableRecordingButton] = useState(false);



    useEffect(() => {
        const storedTestData = localStorage.getItem('testData');
        if (storedTestData) {
            const testData = JSON.parse(storedTestData);
            console.log('test', testData)
            setNewQuestions(testData)
        }
    }, []);
    useEffect(() => {
        console.log('answers:', answers);
    }, [answers]);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                mediaRecorderRef.current = new MediaRecorder(stream);

                mediaRecorderRef.current.ondataavailable = event => {
                    if (event.data.size > 0) {
                        recordedChunksRef.current.push(event.data);
                        console.log('Chunk recorded:', event.data.size);
                    }
                };
                mediaRecorderRef.current.onstop = () => {
                    const blob = new Blob(recordedChunksRef.current, { type: 'audio/wav' });
                    const newAudioURL = URL.createObjectURL(blob);
                    setAudioURLs(prevURLs => ({ ...prevURLs, [currentQuestion]: newAudioURL }));
                    recordedChunksRef.current = [];
                };
            })
            .catch(err => console.error('Error accessing the microphone:', err));
    }, []);

    const startRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.start();
            setIsRecording(true);
            setRecordingDone(true);
            console.log('Recording started');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const fetchedData = newQuestions?.data;

    const isLastQuestion = currentQuestion === fetchedData?.length;

    const submitTestHandler = async () => {

        const requestBody = {
            candidate_id: id,
            question_answer: answers
        }

        setIsLoading(true)
        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/take-test`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        setIsLoading(false);
        console.log("take-test api response:", data);
        router.push('/test-submit-completion')
    }

    const toggleComponent = async () => {
        setIsLoading(true);
        if (!recordingDone && recordedChunksRef.current.length === 0) {
            console.log("No recording made, adding empty string as answer.");
            setAnswers(prev => [...prev, { question: fetchedData[currentQuestion - 1]?.question, answer: "No answer." }]);
        } else {
            await stopAndHandleRecording();
            setIsLoading(false);
        }
        setCompletedQuestions(oldArray => [...oldArray, currentQuestion]);
        if (currentQuestion < fetchedData.length) {
            setCurrentQuestion(currentQuestion + 1);
            setRecordingDone(false);
        }
    }

    useEffect(() => {
        setTimeLeft(59)
    }, [currentQuestion])

    useEffect(() => {
        console.log('Current test:', test);
    }, [test]);

    useEffect(() => {
        if (timeLeft === 0 && (!isLastQuestion)) {
            toggleComponent();
        }

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft, isLastQuestion]);


    const stopAndHandleRecording = async () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            await new Promise((resolve) => {
                mediaRecorderRef.current.onstop = resolve;
                mediaRecorderRef.current.stop();
            });
            setIsRecording(false);

            let blob;
            if (recordedChunksRef.current.length > 0) {
                blob = new Blob(recordedChunksRef.current, { type: 'audio/wav' });
                console.log(`Blob created: Size - ${blob.size}, Type - ${blob.type}`);
            } else {
                blob = new Blob([""], { type: 'audio/wav' });
                console.log("No audio recorded for this question, creating dummy Blob.");
            }

            const newAudioURL = URL.createObjectURL(blob);
            setAudioURLs(prevURLs => ({ ...prevURLs, [currentQuestion]: newAudioURL }));

            const base64Data = await blobToBase64(blob);
            const finalData = base64Data.length > 0 ? await sendAudioToServer(base64Data) : "";
            setAnswers(prev => [...prev, { question: fetchedData[currentQuestion - 1]?.question, answer: finalData.data.transcriptionResult }]);
        } else {
            console.error("Recorder not active or already stopped.");
        }
        recordedChunksRef.current = [];
    };



    async function sendAudioToServer(base64Data) {
        try {

            console.log("send audio to server:", base64Data)
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/speech-to-text`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ audio: base64Data }),
            });
            const data = await response.json();
            console.log(
                'audio response:', data.data.transcriptionResult
            )
            return data;
        } catch (error) {
            console.error('Error sending audio to server:', error);
            return 'Error in transcription';
        }
    }

    function blobToBase64(blob) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result.split(',')[1];
                console.log("Converted Base64 Length:", base64data.length);
                resolve(base64data);
            };
            reader.onerror = reject;
        });
    }

    return (
        <>
            <div className={styles.container}>

                {/*top container*/}
                {isLoading ? (
                    <div className={styles.loader}></div>
                ) : (
                    <>
                        <div className={styles.topContainer}>
                            <div className={styles.questionNoList}>
                                <ul>
                                    {fetchedData?.map((question, index) => {
                                        return (
                                            <>
                                                <li
                                                    key={question.question_id}
                                                    style={completedQuestions.includes(question) ?
                                                        { backgroundColor: '#F0EDFC', color: '#6137DB' } :
                                                        currentQuestion === question ?
                                                            { backgroundColor: '#6137DB', color: '#fff' } :
                                                            { backgroundColor: '#F5F5F5', color: '#4A525D' }}>{question.question_id}
                                                </li>
                                            </>
                                        )
                                    })}
                                </ul>
                            </div>

                            <span> <Image src='/timer.svg' width={20} height={20} />0:{timeLeft}</span>
                        </div>

                        {/* question container */}

                        <div className={styles.questionContainer}>
                            {fetchedData && fetchedData.length > 0 && (
                                <span>{fetchedData[currentQuestion - 1]?.question}</span>
                            )}
                        </div>
                        {/*Record button */}

                        <button
                            style={{
                                borderColor: recordingDone ? '#808080' : '',
                                color: recordingDone ? '#808080' : ''
                            }}
                            className={styles.recordBtn}
                            onClick={isRecording ? stopRecording : startRecording}
                            disabled={isRecording} 
                        >
                            <Image src={recordingDone ? '/mic-disabled.svg' : '/mic.svg'} width={20} height={20} />
                            {isRecording ? 'Stop Recording' : 'Click To Record Answer'}
                        </button>
                        {/*lower container */}
                        <div className={styles.lowerContainer}>
                            <button onClick={isLastQuestion ? submitTestHandler : toggleComponent} disabled={!recordingDone}>
                                {isLastQuestion ? 'Submit Test' : 'Next Question'}
                                <Image src='/Forward.svg' width={20} height={20} />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default QuestionBox;


