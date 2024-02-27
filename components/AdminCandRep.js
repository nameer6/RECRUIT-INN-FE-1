import styles from './AdminCandRep.module.css';
import Image from 'next/image';

const AdminCandRep = ({ setSelectedCandidate, setReportOverlay, allCandidates }) => {
    const iconSize = 25;
    const goToAllIconSize = 15;
    const statusSize = 10;

    console.log("admin cand rep :", allCandidates);

    const cardClickHandler = (candidate) => {
        setSelectedCandidate(candidate);
        setReportOverlay(true);
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

    const newArray = allCandidates?.slice(0, 2);


    return (
        <>
            <div className={styles.superContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.heading} >
                        <h3>Candidate Reports</h3>
                        <span>1000</span>
                    </div>

                    <Image src="/goAll.svg" width={goToAllIconSize} height={goToAllIconSize} />
                </div>

                <div className={styles.reportsCardContainer}>
                    {
                        newArray?.map((item) => {
                            return (
                                <>
                                    <div onClick={() => { cardClickHandler(item) }} className={styles.reportsCard} >
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
                                                <span style={{ backgroundColor: getBackgroundColor(Math.ceil(item?.score)) }} >{Math.ceil(item?.score)}/10</span>
                                                <Image />
                                            </div>
                                        </div>

                                        {/* techstack Conatiner */}
                                        <div className={styles.techStack}>
                                            <ul>
                                                {
                                                    item?.expertise?.map((tech) => {
                                                        return (
                                                            <>
                                                                <li>
                                                                    <div className={styles.basic}>
                                                                        <Image className={styles.django} src={tech.src} width={iconSize} height={iconSize} />
                                                                        <span>{tech?.skill}</span>
                                                                    </div>
                                                                    <p>{tech?.experience}+ Years</p>
                                                                </li>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                        <div className={styles.lowerContainer}>
                                            <div className={styles.temp}>
                                                <span>Applied:</span>
                                                <p>{item?.appliedThrough}</p>
                                            </div>

                                            <div className={styles.temp}>
                                                <span>Experience:</span>
                                                <p>{item?.overAllExperience}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AdminCandRep;