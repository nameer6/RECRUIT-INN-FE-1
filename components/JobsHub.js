import styles from './JobsHub.module.css';
import Image from 'next/image';
import { useActiveItem } from '@/contexts/ActiveItemContext';


const JobsHub = ({ heading, data, jobOverlay, setJobOverlay, setSelectedJob }) => {

    const activeItem = useActiveItem()
    const iconSize = 25;
    const goToAllIconSize = 15;
    const statusSize = 10;

    console.log("Jobs hub data:", data);

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

    const cardClickHandler = (job) => {
        setSelectedJob(job);
        setJobOverlay(true);
    }

    const hasData = data && data.length > 0;


    return (
        <>
            <div className={styles.parentContainer}>
                <div className={styles.superContainer}>
                    <div className={styles.headingContainer}>
                        <div className={styles.heading}>
                            <h3>{heading}</h3>
                            <span>{data.length}</span>
                        </div>

                        <select>
                            <option value='hybrid'>Hybrid</option>
                            <option value='onsite'>On-site</option>
                            <option value='remote'>Remote</option>
                        </select>
                    </div>

                    <div className={styles.subContainer}>
                        {
                            hasData ? (
                                data?.map((item) => {
                                    return (
                                        <div onClick={() => { cardClickHandler(item) }} className={styles.jobsCard} >
                                            <div className={styles.topContainer}>
                                                <h3>{item?.position}</h3>

                                                <div className={styles.rightTopBtns}>
                                                    <span>{item?.applied_candidates_count}+ Applied</span>
                                                    <Image src="/rightArrow.svg" height={iconSize} width={iconSize} />
                                                </div>
                                            </div>
                                            <div className={styles.TechStack}>
                                                <ul  >
                                                    {item?.expertise?.map((skill) => {
                                                        return (
                                                            <li><Image id={styles.unique} src={skill.img} width={iconSize} height={iconSize} />{skill.skill}</li>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                            <div className={styles.lowerContainer}>
                                                <h4 className={styles.location}>{item?.location}</h4>
                                                <h4 className={styles.status} style={{ backgroundColor: getBackgroundColor(item.status) }} >{item.status}<Image src={getStatusSymbol(item.status)} width={statusSize} height={statusSize} /></h4>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className={styles.tempContainer}>
                                    <Image src='/SearchEmpty.gif' width={300} height={300} />
                                    <h3>You haven’t posted any jobs yet...</h3>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobsHub;