import styles from './JobOverlay.module.css';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const JobOverlay = ({token, onClose, jobOverlay, selectedJob, companyId, setMessage, showSuccess}) => {

    const [techStack, setTechStack] = useState();
    const [test,setTest] = useState();
    const [isLoading,setIsLoading] = useState(false);
    const overlayRef = useRef(null);
    const iconSize = 20;
    const infoSymbolSize = 10;

    const demolink = `https://app.recruitinn.ai/invited-candidate?position_id=${selectedJob?.position_id}&client_id=${selectedJob?.company_id}`;

    async function fetchAndCopyAssessmentLink() {
        setIsLoading(true);
        setTechStack(selectedJob?.expertise);
        const reqBody = {
            expertise: techStack
        }
        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/prepare-test`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify(reqBody),
            });
        const data = await response.json();
        setTest(data?.data);
        setIsLoading(false);
        console.log('test data:', test);
        localStorage.setItem('testData', JSON.stringify(data));
        // console.log('test', test)
        console.log(data);
        handleCopyClick();
    }

    

    function copyToClipboard(text) {
        if ('clipboard' in navigator) {
            return navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            const result = document.execCommand('copy');
            document.body.removeChild(textarea);
            return result;
        }
    }

    const handleCopyClick = () => {
        copyToClipboard(demolink)
          .then(() => setCopySuccess('Copied!'))
          .catch(err => console.error('Could not copy text: ', err));
          setMessage("Your link has been copied");
          showSuccess();
      }

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        if (jobOverlay) {
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
    }, [jobOverlay])

    const getBackgroundColor = (status) => {
        if (status === 'Active') {
            return '#E7FFE0';
        } else {
            return '#FFE6E6';
        }
    }

    const getStatusSymbol = (status) => {
        if (status === 'Active') {
            return '/activeStatus.svg';
        } else {
            return '/noteligible.svg';
        }
    }

    return (
        <>
            <div ref={overlayRef} className={styles.parent}>

                <div className={styles.btn}>
                    <button onClick={onClose}>
                        <Image src='/shut.svg' width={15} height={15} />
                    </button>
                </div>

                <div className={styles.superContainer}>
                    <Image id={styles.topImage} src='/flower1.png' width={800} height={500} />
                    <div className={styles.coverContainer}>

                        {/*top conatiner */}
                        <div className={styles.topContainer}>
                            <div className={styles.content}>
                                <h1>{selectedJob?.position}</h1>
                                <div className={styles.subInfo}>
                                    <p><Image src='/JOB_TYPE-active.svg' width={iconSize} height={iconSize} />{selectedJob?.job_type}</p>
                                    <span style={{ backgroundColor: getBackgroundColor(selectedJob?.status) }}>{selectedJob?.status}<Image src={getStatusSymbol(selectedJob?.status)} width={infoSymbolSize} height={infoSymbolSize} /></span>
                                </div>
                            </div>
                        </div>

                        {/* body */}
                        <div className={styles.copyDiv}>
                            {isLoading ? (
                                <div className={styles.loader}></div>
                            ) : (
                                <span onClick={fetchAndCopyAssessmentLink}>Copy Assessment Link <Image src='/copylink.svg' height={25} width={25} /></span>
                            ) }
                        </div>

                        <div className={styles.description}>
                            {selectedJob?.description}
                        </div>
                        {/* skils section */}

                        <div className={styles.techContainer}>
                            <h2>Skills</h2>
                            <div className={styles.TechStack}>
                                <ul>
                                    {selectedJob?.expertise.map((item) => {
                                        return (
                                            <li ><Image id={styles.unique} src={item?.img} width={iconSize} height={iconSize} />{item?.skill}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Image id={styles.lowerImage} src='/flower2.png' width={700} height={300} />
            </div>
        </>
    )
}

export default JobOverlay;