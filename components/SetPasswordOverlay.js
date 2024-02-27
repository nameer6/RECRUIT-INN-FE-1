import styles from './SetPassword.module.css';
import { useState,useEffect,useRef } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Stages from './Stages';
import gsap from 'gsap';
import PasswordConfirm from './PasswordConfirm';
import PasswordBtns from './PasswordBtns';


const SetPasswordOverlay = ({ showOverlay, onClose, stages, stageHeadings }) => {

    const overlayRef = useRef(null);

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
    const {id} = router?.query;
    const infoSymbolSize = 20;
    const [currentStage, setCurrentStage] = useState(stages.SET_PASSWORD);
    const [completedStages, setCompletedStages] = useState([]);
    const [password,setPassword] = useState(null);

    useEffect( () => {
        setCurrentStage(stages.SET_PASSWORD);
    }, []);

    const handleFormSubmit = async () => {
        const reqBody = {
            token : id,
            password: password
        }

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/set-client-password/123`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqBody),
            });
            const data = await response.text();
            console.log(data);
            router.push('/client-login');
        } catch(err){
            console.log("Error: ",err)
        }
    };

    return (
        <>

            <div ref={overlayRef} className={styles.parent}>
                <div className={styles.btn}>
                    <button onClick={onClose}></button>
                </div>

                <div className={styles.superContainer}>
                    <div className={styles.coverContainer}>
                        <div className={styles.topContainer}>
                            <h2>{stageHeadings[currentStage] ? stageHeadings[currentStage] : 'Default Heading'}</h2>
                        </div>

                        <Stages currentStage={currentStage} stages={stages} completedStages={completedStages} />

                        {currentStage === stages.SET_PASSWORD && (
                            <>
                                <PasswordConfirm password={password} setPassword={setPassword} />
                                <div className={styles.wrapper}>
                                    <PasswordBtns handleFormSubmit={handleFormSubmit}  />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SetPasswordOverlay;