import { useState } from 'react';
import styles from './InvitationOverlay.module.css';
import Image from 'next/image';
import Stages from './Stages';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import PersonalInfo from './PersonalInfo';
import PersonalInfoBtns from './PersonalInfoBtns';
import CandidateVerify from './CandidateVerify';
import CandidateVerifyBtns from './CandVerifyBtns';
import CandSelfSkill from './CandSelfSkill';
import CandSelfSkillBtns from './CandSelfSkillBtn';
import CandSelfAssessment from './CandSelfAssessment';
import CandSelfAssessmentBtns from './CandSelfAssessmentBtns';
import ErrorIndicator from './ErrorIndicator';
import SuccessIndicator from './SuccessIndicator';

const SelfOverlay = ({ showOverlay, onClose, stages, stageHeadings }) => {

    const overlayRef = useRef(null);

    const nameRef = useRef();
    const contactRef = useRef();
    const emailRef = useRef();
    const expertiseRef = useRef();
    const countryRef = useRef();
    const cityRef = useRef();

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
    const infoSymbolSize = 20;
    const [currentStage, setCurrentStage] = useState(stages.PERSONAL_INFO);
    const [completedStages, setCompletedStages] = useState([]);

    const toggleComponent = () => {
        console.log("Current Stage: ", currentStage);
        console.log("Is Share Link Stage? ", currentStage === stages.SHARE_LINK);

        if((currentStage === stages.PERSONAL_INFO) && !fillValidity()){
            setMessage("Please fill all the fields")
            showError();
            return;
        }

        if((currentStage === stages.PERSONAL_INFO) && !validateEmailReceiver()){
            setMessage("Entered email is not valid")
            showError();
            return;
        }

        if((currentStage === stages.SKILLS) && !validateAddSkill()){
            setMessage("At least enter one skill!");
            showError();
            return;
        }
    
        const newCompletedStages = [...completedStages, currentStage];
        setCompletedStages(newCompletedStages);
    
        if (currentStage === stages.SHARE_LINK) {
            router.push('/');
        } else {
            switch (currentStage) {
                case stages.PERSONAL_INFO:
                    
                    console.log("Moving to VERIFICATION stage");
                    handlePersonalInfo();
                    setCurrentStage(stages.VERIFICATION);
                    break;
                case stages.VERIFICATION:
                    console.log("Moving to SKILLS stage");
                    setMessage("Success!")
                    showSuccess();
                    verifyCode();
                    break;
                case stages.SKILLS:
                    console.log("Moving to ASSESSMENT stage");
                    handleSetExpertise();
                    console.log("techstack:", techStack)
                    handleTestPreparation();
                    setCurrentStage(stages.ASSESSMENT);
                    break;
                default:
                    setCurrentStage(stages.JOB_DETAIL);
            }
        }
    }

    const backToggleComponent = () => {
        const stageToBePopped = completedStages.slice(0, -1);
        setCompletedStages(stageToBePopped);
        switch (currentStage) {
            case stages.VERIFICATION:
                setCurrentStage(stages.PERSONAL_INFO);
                break;
            case stages.SKILLS:
                setCurrentStage(stages.VERIFICATION);
                break;
            default:
                setCurrentStage(stages.JOB_DETAIL)
        }
    }

    function generateRandomCode() {
        const randomCode = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
        return randomCode;
    }

    const validateAddSkill = () => {
        return techStack.some(skillObj => skillObj.skill && skillObj.skill.trim() !== '');
    };

    const [generatedCode, setGeneratedCode] = useState(() => generateRandomCode());
    const [name, setName] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [expertise, setExpertise] = useState(null);
    const [email, setEmail] = useState(null);
    const [contact, setContact] = useState(null);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [isCodeInvalid, setIsCodeInvalid] = useState(false);
    const [techStack, setTechStack] = useState(null);
    const [candidateId, setCandidateId] = useState(null);
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    const [message,setMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [reqBody , setReqBody] = useState(null);
    const [req, setReq] = useState(null);

    useEffect(() => {
        setName(nameRef?.current?.value);
        setCity(cityRef?.current?.value);
        setContact(contactRef?.current?.value);
        setEmail(emailRef?.current?.value);
        setExpertise(expertiseRef?.current?.value);
        setCountry(countryRef?.current?.value);

        const reqBody = {
            name: name,
            city: city,
            contact_no: contact,
            email : email,
            over_all_exp : expertise,
            country : country,
            applied_through: 'Self'
        }

        const reqtwo = {
            expertise: techStack
        }

        setReq(reqtwo);

        setReqBody(reqBody)
    },[name,city,contact,email,expertise,country,techStack])

    const showError = () => {
        setshowErrorMessage(true);

        setTimeout(() => {
            setshowErrorMessage(false);
        }, 3000);
    };

    const showSuccess = () => {
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    const fillValidity = () => {
        console.log("fillValidity", nameRef?.current?.value || emailRef?.current?.value || contactRef?.current?.value || expertiseRef?.current?.value || countryRef?.current?.value || cityRef?.current?.value)
        return nameRef?.current?.value || emailRef?.current?.value || contactRef?.current?.value || expertiseRef?.current?.value || countryRef?.current?.value || cityRef?.current?.value ;
    };

    const validateEmailReceiver = () => {
        if (!emailRef.current.value || !isValidEmail(emailRef.current.value)) {
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

    const handlePersonalInfo = async () => {
        const newToken = localStorage.getItem('client-token');

        try {
            const requestBody = {
                name: nameRef.current.value,
                city: cityRef.current.value,
                contact_no: contactRef.current.value,
                email: emailRef.current.value,
                over_all_exp: expertiseRef.current.value,
                country: countryRef.current.value,
                applied_through: 'Self'
            };

            console.log("request body: ", reqBody);

            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/candidate-info-self`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${newToken}`
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            setCandidateId(data?.data?.data?.candidate_id);
            console.log('data in Self overlay:', data?.data?.data?.candidate_id);
        } catch (err) {
            console.log('ERRROR:', err);
        }

        try {
            const requestBody = {
                to: emailRef?.current?.value,
                subject: 'RECRUITINN: Verify your account!',
                text: `
                    Your verification code is : ${generatedCode}
                `
            }

            console.log("request body: ", requestBody);

            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/sendMail`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            const data = await response.json();
            console.log('data in Self overlay:', data);
        } catch (err) {
            console.log('ERRROR:', err);
        }
    }

    const verifyCode = () => {
        const otpCode = otp.join("");
        console.log("Entered OTP:", otpCode);
        console.log("generated code compare:", generatedCode)

        if (generatedCode === otpCode) {
            console.log("OTP Verified");
            setCurrentStage(stages.SKILLS);
            setMessage("Success!")
            showSuccess();
        } else {
            setMessage("Invalid code entered, please try again")
            showError();
            setIsCodeInvalid(true);
            console.error('its invalid')
        };
    }

    const handleSetExpertise = async () => {

        const requestBody = {
            token: candidateId,
            expertise: techStack
        }

        console.log("req body for setting expertise:", requestBody);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/set-expertise-by-cand`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            const data = await response.json();
            console.log('data in set expertise:', data);
        } catch (err) {
            console.log("error:", err)
        }
    }

    const handleTestPreparation = async () => {
        console.log("request.boy in handle test prep method:",req)

        setReq()
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/prepare-test`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(req),
            });
            const data = await response.json(); 
            localStorage.setItem('testData', JSON.stringify(data));
            console.log('data in set expertise:', data);
        } catch (err) {
            console.log("error:", err)
        }
    }

    return (
        <>
            <div ref={overlayRef} className={styles.parent}>
                <SuccessIndicator showSuccessMessage={showSuccessMessage} msgText={message} />
                <ErrorIndicator showErrorMessage={showErrorMessage} msgText={message} />
                <div className={styles.superContainer}>
                    <div className={styles.coverContainer}>
                        <div className={styles.topContainer}>
                            <h2>{stageHeadings[currentStage]}</h2>
                            {/* <span>
                                <p className={styles.tooltip}>You can add maximum of 4 skills and minimum of 1</p>
                                <Image src='/info.svg' width={infoSymbolSize} height={infoSymbolSize} />
                            </span> */}
                        </div>

                        <Stages currentStage={currentStage} stages={stages} completedStages={completedStages} />

                        {currentStage === stages.PERSONAL_INFO && (
                            <>
                                <PersonalInfo expertiseRef={expertiseRef} contactRef={contactRef} nameRef={nameRef} cityRef={cityRef} countryRef={countryRef} emailRef={emailRef}  setName={setName} setExpertise={setExpertise} setContact={setContact} setCity={setCity} setEmail={setEmail} setCountry={setCountry} />
                                <div className={styles.wrapper}>
                                    <PersonalInfoBtns showSuccess={showSuccess} setMessage={setMessage} validateEmailReceiver={validateEmailReceiver} fillValidity={fillValidity}  showError={showError} onContinue={toggleComponent} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                        {currentStage === stages.VERIFICATION && (
                            <>
                                <CandidateVerify otp={otp} setOtp={setOtp} isCodeInvalid={isCodeInvalid} setIsCodeInvalid={setIsCodeInvalid} />
                                <div className={styles.wrapper}>
                                    <CandidateVerifyBtns onContinue={toggleComponent} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                        {currentStage === stages.SKILLS && (
                            <>
                                <CandSelfSkill handleTestPreparation={handleTestPreparation} setTechStack={setTechStack} />
                                <div className={styles.wrapper}>
                                    <CandSelfSkillBtns handleTestPreparation={handleTestPreparation} onContinue={toggleComponent} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                        {currentStage === stages.ASSESSMENT && (
                            <>
                                <CandSelfAssessment />
                                <div className={styles.wrapper}>
                                    <CandSelfAssessmentBtns candidateId={candidateId} onContinue={toggleComponent} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                    </div>
                </div>

            </div>
        </>
    )
}

export default SelfOverlay;