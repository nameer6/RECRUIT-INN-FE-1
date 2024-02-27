import { useState } from 'react';
import styles from './InvitationOverlay.module.css';
import Image from 'next/image';
import Stages from './Stages';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import JobDetails from './JobDetails';
import JobDetailsBtn from './JobDetailsBtn';
import PersonalInfo from './PersonalInfo';
import PersonalInfoBtns from './PersonalInfoBtns';
import RequiredSkills from './RequiredSkills';
import RequiredSkillsBtns from './RequiredSkillsBtns';
import { useExpertiseContext } from '@/contexts/ExpertiseContext';
import ErrorIndicator from './ErrorIndicator';

const InvitationOverlay = ({ message, setMessage, showSuccess, showSuccessMessage, showOverlay, onClose, stages, stageHeadings }) => {

    const { expertiseItem, setExpertiseItem } = useExpertiseContext();
    console.log("expertise Item in invitationOverlay :", expertiseItem);
    const router = useRouter();
    const { client_id } = router.query;
    const { position_id } = router.query;

    console.log("client_id:",client_id)

    useEffect(() => {
        try {
            const newExpertise = localStorage.getItem('expertiseData');

            if (newExpertise) {
                const parsedExpertise = JSON.parse(newExpertise);
                console.log("parsedExpertise:", parsedExpertise);
                // setNewExpert(parsedExpertise);
                console.log('expertisE:', newExpert)
                console.log("newExpertise:", newExpertise)
                setCandidateExpertise(parsedExpertise);
                console.log("New expertise:", parsedExpertise);
            } else {
                console.log("No expertise data found in local storage.");
            }
        } catch (error) {
            console.error("Error parsing expertise data:", error);
        }
    }, []);

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


    const infoSymbolSize = 20;
    const [currentStage, setCurrentStage] = useState(stages.JOB_DETAIL);
    const [completedStages, setCompletedStages] = useState([]);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [expertise, setExpertise] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [candidateExpertise, setCandidateExpertise] = useState();
    const [newToken, setNewToken] = useState(null);
    const [newId, setNewId] = useState(null);
    const [newExpert, setNewExpert] = useState(null);
    const [clientName, setClientName] = useState(null);
    const [clientData, setClientData] = useState(null);
    const [positionId, setPositionId] = useState(null);
    const [positionData, setPositionData] = useState(null);
    const [validationErrors, setValidationErrors] = useState(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const cityRef = useRef(null);
    const countryRef = useRef(null);
    const expertiseRef = useRef(null);
    const contactRef = useRef(null);

    const [reqBody,setReqBody] = useState(null);

    const handleContinue = () => {
        const errors = {};
        let isFormIncomplete = false;
        let specificMsg = false;

        console.log("Form Incomplete: ", isFormIncomplete, "Errors: ", errors);

        console.log("Debug: Name:", nameRef.current.value, "Email:", emailRef.current.value,
            "city:", cityRef.current.value, "Country",countryRef.current.value, "expertise: ", expertiseRef.current.value,
            "contact:", contactRef.current.value
        );

        setReqBody({
            name: nameRef.current.value,
            email: emailRef.current.value,
            over_all_exp : expertiseRef.current.value,
            contact_no : contactRef.current.value,
            applied_through : clientData?.client_name,
            company_id: newId,
            expertise: newExpert,
        })

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!nameRef.current.value.trim()) {
            errors.name = 'Please enter Name.';
            isFormIncomplete = true;
            
        }

        if (!emailRef.current.value.trim()) {
            errors.email = 'Please enter Email.';
            isFormIncomplete = true;
        } else if (!emailRegex.test(emailRef.current.value)) {
            // errors.email = 'Invalid email format.';  
            setMessage("Entered email is not valid");
            specificMsg = true;
            isFormIncomplete = true; 
        }

        if (!contactRef.current.value.trim()) {
            errors.contact = 'Please enter Contact.';
            isFormIncomplete = true;
        } else if (isNaN(contactRef.current.value)) {
            // errors.contact = 'Contact number must be numeric.';
            setMessage("Entered contact is not a number");
            specificMsg = true;
            isFormIncomplete = true; 
        }

        if (!expertiseRef.current.value.trim()) {
            errors.name = 'Please enter Name.';
            isFormIncomplete = true;
        }

        if (!cityRef.current.value.trim()) {
            errors.name = 'Please enter Name.';
            isFormIncomplete = true;
        }

        if (!countryRef.current.value.trim()) {
            errors.name = 'Please enter Name.';
            isFormIncomplete = true;
        }


        setValidationErrors(errors);

        console.log("Form Incomplete: ", isFormIncomplete, "Errors: ", errors);

        if (!isFormIncomplete) {
            console.log('Form submitted successfully!');
            toggleComponent(); 
        
        } else {
            setMessage("Please make sure to fill all the fields correctly.");
        }

    };

    const toggleComponent = () => {

        const newCompletedStages = [...completedStages, currentStage];
        setCompletedStages(newCompletedStages);

        if (currentStage === stages.SHARE_LINK) {
            router.push('/');
        } else {
            switch (currentStage) {
                case stages.JOB_DETAIL:

                    setCurrentStage(stages.PERSONAL_INFO);
                    break;
                case stages.PERSONAL_INFO:
                    setCurrentStage(stages.REQUIRED_SKILLS);
                    break;
                default:
                    setCurrentStage(stages.JOB_DETAIL);
            }
        }
    }


    useEffect(() => {
        console.log('newExpert:', newExpert);
    }, [newExpert]);

    const backToggleComponent = () => {
        const stageToBePopped = completedStages.slice(0, -1);
        setCompletedStages(stageToBePopped);
        switch (currentStage) {
            case stages.REQUIRED_SKILLS:
                setCurrentStage(stages.PERSONAL_INFO);
                break;
            case stages.PERSONAL_INFO:
                setCurrentStage(stages.JOB_DETAIL);
                break;
            default:
                setCurrentStage(stages.JOB_DETAIL)
        }
    }

    useEffect(() => {
        const { client_id } = router.query;
        const { position_id } = router.query;

        console.log("client id:", client_id);
        console.log("position id:", position_id)
        setPositionId(position_id)
        setNewId(client_id);
    }, [router.isReady, router.query]);

    useEffect(() => {
        async function fetchOneCompany() {
            if (!client_id) {
                console.error("Client ID is undefined.");
                return;
            }

            const reqBody = {
                id: newId
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-one-company`,
                {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const data = await response.json();
            setClientData(data?.data)
            console.log('one company data:', data?.data);
        }
        if (client_id) {
            fetchOneCompany();
        }
    }, [newId, router.query, router.isReady])

    useEffect(() => {
        async function fetchOnePosition() {

            if (!position_id) {
                console.error("Client ID is undefined.");
                return;
            }
            const reqBody = {
                position_id: positionId
            }
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-one-positions`,
                {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: { 'Content-Type': 'application/json' },
                }
            );
            const data = await response.json();
            setNewExpert(data?.data?.expertise)
            setPositionData(data?.data)
            console.log('one position data:', data?.data);
        }
        if (position_id) {
            fetchOnePosition();
        }
    }, [positionId, router.query, router.isReady])


    const createCandidate = async () => {
        // const requestBody = {
        //     name: nameRef?.current ? nameRef?.current?.value : '',
        //     email: emailRef?.current ? emailRef?.current?.value : '',
        //     over_all_exp: expertiseRef.current ? expertiseRef.current.value : '',
        //     applied_through: 'Co-ventech',
        //     company_id: newId,
        //     expertise: newExpert,
        //     contact_no: contactRef.current ? contactRef.current.value : '',
        // }
        console.log('request body: ', reqBody);
        console.log("new token:", newToken, 'and new id:', newId)

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/candidate-info`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${newToken}`
                },
                body: JSON.stringify(reqBody),
            });
            const data = await response.json();
            console.log("candidate data :", data?.data?.data?.candidate_id)
            return data?.data?.data?.candidate_id;
        } catch (error) {
            console.error('Error creating candidate:', error);
        }
    };

    // console.log('Form Data:', { name: nameRef.current.value, email: emailRef.current.value, ... });

    const redirectToTestPage = async () => {
        const candidateId = await createCandidate();
        console.log("candidate id:", candidateId)
        if (candidateId) {
            console.log("REDIRECTING TO:")
            console.log(`/test?id=${candidateId}`)
            router.push(`/test?id=${candidateId}`);
        }
    };

    const jobDetails = {
        position: positionData?.position,
        description: positionData?.description
    }

    return (
        <>
            <div ref={overlayRef} className={styles.parent}>
                {showSuccessMessage && <ErrorIndicator showSuccessMessage={showSuccessMessage} msgText={message} />}
                

                <div className={styles.superContainer}>
                    <div className={styles.coverContainer}>
                        <div className={styles.topContainer}>
                            <h2>{stageHeadings[currentStage]}</h2>
                            {/* <span>
                            <h2 className={styles.headingjob}>{stageHeadings[currentStage]}</h2>
                            <span>
                                <p className={styles.tooltip}>You can add maximum of 4 skills and minimum of 1</p>
                                <Image src='/info.svg' width={infoSymbolSize} height={infoSymbolSize} />
                            </span> */}
                        </div>
                        
                        <Stages currentStage={currentStage} stages={stages} completedStages={completedStages} />

                        {currentStage === stages.JOB_DETAIL && (
                            <>
                                <JobDetails clientName={clientData?.company_name} details={jobDetails} />
                                <div className={styles.wrapper}>
                                    <JobDetailsBtn onContinue={toggleComponent} onBack={backToggleComponent} onClose={onClose} setCompletedStages={setCompletedStages} completedStages={completedStages} />
                                </div>
                            </>
                        )}

                        {currentStage === stages.PERSONAL_INFO && (
                            <>
                                <PersonalInfo validationErrors={validationErrors} nameRef={nameRef} contactRef={contactRef} emailRef={emailRef} cityRef={cityRef} countryRef={countryRef} expertiseRef={expertiseRef} handleContinue={handleContinue} setCity={setCity} setContact={setContact} setCountry={setCountry} setEmail={setEmail} setExpertise={setExpertise} setName={setName} />
                                <div className={styles.wrapper}>
                                    <PersonalInfoBtns showSuccess={showSuccess} onContinue={handleContinue} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                        {currentStage === stages.REQUIRED_SKILLS && (
                            <>
                                <RequiredSkills expertise={newExpert} />
                                <div className={styles.wrapper}>
                                    <RequiredSkillsBtns redirectToTestPage={redirectToTestPage} onBack={backToggleComponent} />
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default InvitationOverlay;