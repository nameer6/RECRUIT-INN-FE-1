import styles from './Overlay.module.css';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Stages from './Stages';
import { useRouter } from 'next/router';
import LoginComp from './Login';
import LoginBtns from './LoginBtns';
// import Login from '@/pages/client-login';
import ForgotPassword from './ForgotPassword';
import ForgotPasswordBtns from './ForgotPassBtns';


const LoginOverlay = ({ email, setPassword, setEmail, loginApiCall, onClose, stages, stageHeadings, showOverlay }) => {

    const overlayRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailReceiver, setEmailReceiver] = useState();
    const [companyId, setCompanyId] = useState('');

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        if (showOverlay) {
            gsap.to(overlayRef.current, {
                y: '0%',
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        else {
            gsap.to(overlayRef.current, {
                y: '100%',
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: onClose
            });
        }

        return (() => {
            gsap.to(overlayRef.current,
                { y: '100%', opacity: 0, duration: 0.1, ease: 'power1' }
            );
        });
    }, [showOverlay, onClose])

    const router = useRouter();
    console.log("router object:", router)
    const { id } = router?.query;

    console.log('id:', id);
    const infoSymbolSize = 20;
    const [currentStage, setCurrentStage] = useState(stages.LOG_IN);
    const [completedStages, setCompletedStages] = useState([]);
    const [viewMode, setViewMode] = useState('login');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');



    useEffect(() => {
        const demolink = `http://localhost:3000/set-password/${companyId}`;
        setSubject('RECRUITINN: SET UP YOUR NEW PASSWORD');
        setText(`
        follow the link to set up your new password: \n
            ${demolink}
        `)
    }, [companyId, emailReceiver]);


    const checkIfEmailIsInDbHandler = async () => {
        const reqBody = {
            email: email
        };

        const requestBody = {
            to: emailReceiver,
            subject: subject,
            text: text
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/check-client`, {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        console.log("response about client checking:", data);
        setCompanyId(data?.data?.message?.company_id);

        if (data?.data?.message?.company_id) {
            setCompanyId(data?.data?.message?.company_id); 

            const demolink = `https://app.recruitinn.ai/set-password/${data?.data?.message?.company_id}`;
            const subject = 'RECRUITINN: SET UP YOUR NEW PASSWORD';
            const text = `Follow the link to set up your new password: \n ${demolink}`;

            console.log('link:', demolink)
            const requestBody = {
                to: email,
                subject: subject,
                text: text,
            };

            await sendResetPasswordEmail(requestBody);
        } else {
            console.log('company id not available')
        }
    }

    const sendResetPasswordEmail = async (emailDetails) => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/sendMail`, {
                method: 'POST',
                body: JSON.stringify(emailDetails),
                headers: { 'Content-Type': 'application/json' },
            });

            const responseData = await response.text();
            console.log('Email sent successfully:', responseData);
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    };


    return (
        <>
            <div ref={overlayRef} className={styles.parent}>


                <div className={styles.superContainer}>
                    {isLoading ? (
                        <div className={styles.loader}></div>
                    ) : (
                        <div className={styles.coverContainer}>
                            <div className={styles.topContainer}>
                                <h2>{stageHeadings[currentStage]}</h2>
                            </div>

                            <Stages currentStage={currentStage} stages={stages} completedStages={completedStages} />

                            {viewMode === 'login' ? (
                                <>
                                    <LoginComp onViewChange={() => setViewMode('forgotPassword')} setPassword={setPassword} setEmail={setEmail} />
                                    <div className={styles.wrapper}>
                                        <LoginBtns loginApiCall={loginApiCall} setCompletedStages={setCompletedStages} completedStages={completedStages} />
                                    </div>
                                </>
                            ) : viewMode === 'forgotPassword' ? (
                                <>
                                    <ForgotPassword email={email} setEmail={setEmail} setEmailReceiver={setEmailReceiver} />
                                    <div className={styles.wrapper}>
                                        <ForgotPasswordBtns checkIfEmailIsInDbHandler={checkIfEmailIsInDbHandler} email={emailReceiver} />
                                    </div>
                                </>
                            ) : (
                                <>
                                </>
                            )}
                        </div>
                    )}
                </div>

            </div>
        </>
    )
}

export default LoginOverlay;