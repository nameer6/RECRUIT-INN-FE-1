    import { useState } from 'react';
    import styles from './Overlay.module.css';
    import Image from 'next/image';
    import Stages from './Stages';
    import AddSkillForm from './AddSkillForm';
    import RightBottomBtns from './RightBottomBtns';
    import JobType from './JobType';
    import JobTypeBtns from './JobTypeBtns';
    import AIassessment from './AIassesment';
    import AssessmentBtns from './AssessmentBtns';
    import ShareLink from './ShareLink';
    import { useRouter } from 'next/router';
    import ShareLinkBtns from './ShareLinkBtns';
    import { useRef, useEffect } from 'react';
    import gsap from 'gsap';
    import ClientInfo from './ClientInfo';
    import AdminOverlayBtns from './AdminOverlayBtns';
    import ErrorIndicator from './ErrorIndicator';

    const AdminOverlay = ({adminToken, message, showError, showErrorMessage, showSuccess, setMessage, showOverlay, onClose, stages, stageHeadings }) => {

        console.log('stage headings:'.stageHeadings);

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
        }, [showOverlay])

        const router = useRouter();
        const infoSymbolSize = 20;
        const [currentStage, setCurrentStage] = useState(stages.CLIENT_INFO);
        const [completedStages, setCompletedStages] = useState([]);
        const [clientname, setClientname] = useState(null);
        const [companyname, setCompanyname] = useState(null);
        const [email, setEmail] = useState(null);
        const [phoneNo, setPhoneNo] = useState(null);
        const [actManager, setActManager] = useState(null);
        const [companySize, setCompanySize] = useState(null);
        const [city, setCity] = useState(null);
        const [country, setCountry] = useState(null);
        const [id, setId] = useState(null);

        const validateEmailReceiver = () => {
            if (!email || !isValidEmail(email)) {
                setMessage("Please enter a valid email address.");
                showError();
                return false;
            }
            return true;
        };

        const isValidEmail = (email) => {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(email);
        };

        const fillValidity = () => {
            return companyname && companySize && phoneNo && actManager && country && city && clientname && email ;
        };

        let link;
        useEffect(() => {
            setCurrentStage(stages.CLIENT_INFO);
        }, []);

        useEffect(() => {
            link = `${process.env.NEXT_PUBLIC_REMOTE_URL}/set-password/${id}`
            console.log(link);
        }, [id])

        const handleFormSubmit = async () => {
            const requestBody = {
                company_name: companyname,
                company_location: city,
                email: email,
                account_user_name: actManager,
                contact_no: phoneNo
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/client-sign-up-admin`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${adminToken}`,
                    },
                    body: JSON.stringify(requestBody),
                });
                const data = await response.json();
                console.log("login response:", data?.data?.data?.company_id);
                setId(data?.data?.data?.company_id);
            } catch (error) {
                console.error('Error submitting form:', error);
            }

            const reqBody = {
                to: email,
                subject: 'RECRUITINN: Set Your Password & Login!',
                text: `
                    Click on this link to set up your password and login:
                    
                    ${link}
                `
            }

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/sendMail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(reqBody),
                });
                const data = await response.text();
                console.log('response:', data);
            } catch (error) {
                console.error('Error mailing the client:', error);
            }
        };

        return (
            <>
                <div ref={overlayRef} className={styles.parent}>
                    <ErrorIndicator showErrorMessage={showErrorMessage} msgText={message} />
                    <div className={styles.btn}>
                        <button onClick={onClose}>
                            <Image src='/shut.svg' width={15} height={15} />
                        </button>
                    </div>

                    <div className={styles.superContainer}>
                        <div className={styles.coverContainer}>
                            <div className={styles.topContainer}>
                                <h2>{stageHeadings[currentStage] ? stageHeadings[currentStage] : 'Default Heading'}</h2>
                            </div>

                            <Stages currentStage={currentStage} stages={stages} completedStages={completedStages} />

                            {currentStage === stages.CLIENT_INFO && (
                                <>
                                    <ClientInfo email={email} setActManager={setActManager} setCity={setCity} setClientname={setClientname} setEmail={setEmail} setPhoneNo={setPhoneNo} setCountry={setCountry} setCompanySize={setCompanySize} setCompanyname={setCompanyname} />
                                    <div className={styles.wrapper}>
                                        <AdminOverlayBtns email={email} showError={showError} setMessage={setMessage} fillValidity={fillValidity} validateEmailReceiver={validateEmailReceiver} showSuccess={showSuccess} handleFormSubmit={handleFormSubmit} onClose={onClose} setCompletedStages={setCompletedStages} completedStages={completedStages} />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    export default AdminOverlay;