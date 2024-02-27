import styles from './CandidateReports.module.css';
import Image from 'next/image';
import { useActiveItem } from '@/contexts/ActiveItemContext';

const CandidateReports = ({ candidateReps, reportOverlay, setReportOverlay, setSelectedCandidate, isLoading, setIsLoading }) => {

    const iconSize = 25;
    const goToAllIconSize = 15;
    const { setActiveItem } = useActiveItem();
    console.log("candidate reports:", candidateReps)

    const newArray = candidateReps.slice(0, 2);

    const hasData = newArray && newArray.length > 0;

    const cardClickHandler = (candidate) => {
        setSelectedCandidate(candidate);
        setReportOverlay(!reportOverlay);
    }

    const getBackgroundColor = (score) => {
        if (score >= 7 && score <= 10) {
            return '#E7FFE0';
        } else if (score >= 5 && score <= 6) {
            return '#F0F3FF';
        } else {
            return '#FFE6E6';
        }
    }

    const handleArrowClick = () => {
        setActiveItem('All')
    }

    return (
        <>
            <div className={styles.superContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.heading} >
                        <h3>Candidate Reports</h3>
                        <span>{candidateReps.length}</span>
                    </div>
                    <Image src="/goAll.svg" width={goToAllIconSize} height={goToAllIconSize} onClick={handleArrowClick} />
                </div>

                {
                    hasData ? (
                        <div className={styles.reportsCardContainer}>
                            {newArray.map((item) => {
                                return (
                                    <>
                                        <div className={styles.reportsCard} onClick={() => { cardClickHandler(item) }} >

                                            {/*top container */}
                                            <div className={styles.topContainer}>
                                                <div className={styles.leftTop}>
                                                    <Image src='/Emoji.svg' width={iconSize} height={iconSize} />
                                                    <div className={styles.basicInfo}>
                                                        <h4>{item?.name}</h4>
                                                        <span>{item?.position}</span>
                                                    </div>
                                                </div>
                                                <div className={styles.rightTop}>
                                                    <span style={{ backgroundColor: getBackgroundColor(Math.ceil(item?.results?.technicalRating)) }}>{Math.ceil(item?.results?.technicalRating)}/10</span>
                                                    <Image />
                                                </div>
                                            </div>

                                            {/* techstack Conatiner */}

                                            <div className={styles.techStack}>
                                                <ul>
                                                    {item?.expertise?.map((skill) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div className={styles.basic}>
                                                                        <Image className={styles.django} src='/Django.svg' width={iconSize} height={iconSize} />
                                                                        <span>{skill.skill}</span>
                                                                    </div>
                                                                    <p>3+ Years</p>
                                                                </li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            }
                        </div>

                    ) : (
                        <div className={styles.tempContainer}>
                            <Image src='/SearchEmpty.gif' width={200} height={200} />
                            <h3>You haven’t clients any jobs yet...</h3>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CandidateReports;