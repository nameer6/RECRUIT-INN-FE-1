import styles from './Overlay.module.css';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import Stages from './Stages';
import { useRouter } from 'next/router';
import LoginComp from './Login';
import LoginBtns from './LoginBtns';
import ForgotPassword from './ForgotPassword';
import { Foldit } from 'next/font/google';
import ForgotPasswordBtns from './ForgotPassBtns';
// import Login from '@/pages/client-login';

const AdminLoginOverlay = ({ email, setPassword, setEmail, loginApiCall, onClose, stages, stageHeadings, showOverlay }) => {

    const overlayRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailReceiver,setEmailReceiver] = useState();

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
    const [viewMode, setViewMode] = useState('login')

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
                                    <LoginComp onViewChange={() => setViewMode('forgotPassword')} email={email} setPassword={setPassword} setEmail={setEmail} />
                                    <div className={styles.wrapper}>
                                        <LoginBtns email={email} loginApiCall={loginApiCall} setCompletedStages={setCompletedStages} completedStages={completedStages} />
                                    </div>
                                </>
                            ) : viewMode === 'forgotPassword' ? (
                                <>
                                    <ForgotPassword setEmailReceiver={setEmailReceiver} />
                                    <div className={styles.wrapper}>
                                        <ForgotPasswordBtns email={emailReceiver} />
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

export default AdminLoginOverlay;