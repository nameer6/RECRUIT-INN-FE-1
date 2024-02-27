import styles from './Jobs.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useActiveItem } from '../src/contexts/ActiveItemContext'

const Jobs = ({ data, jobsOverlay, setJobOverlay, setSelectedJob, isLoading, setIsLoading }) => {

    console.log("datta in jobs component:", data)
    const { setActiveItem } = useActiveItem();
    const iconSize = 25;
    const goToAllIconSize = 15;
    const statusSize = 10;
    const newArray = data?.slice(0, 2);

    const cardClickHandler = (job) => {
        setSelectedJob(job);
        setJobOverlay(true);
    }

    const hasData = newArray && newArray.length > 0;

    const handleArrowClick = () => {
        setActiveItem('AllJobs')
    }

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
            <div className={styles.superContainer}>
                <div className={styles.headingContainer}>
                    <div className={styles.heading} >
                        <h3>Posted Jobs</h3>
                        <span>{data?.length || 0}</span>
                    </div>
                    <Image src="/goAll.svg" onClick={handleArrowClick} width={goToAllIconSize} height={goToAllIconSize} />
                </div>

                {hasData ? (
                    <div className={styles.jobsContainer}>
                        {newArray.map((item) => (
                            <div className={styles.jobsCard} onClick={() => cardClickHandler(item)}>
                                <div className={styles.topContainer}>
                                    <h3>{item?.position}</h3>
                                    <div className={styles.rightTopBtns}>
                                        <span>{item?.applied_candidates_count}+ Applied</span>
                                        <Image src="/rightArrow.svg" height={iconSize} width={iconSize} />
                                    </div>
                                </div>
                                <div className={styles.TechStack}>
                                    <ul>
                                        {item?.expertise?.map((skill) => (
                                            <li>
                                                <Image id={styles.unique} src={skill.img} width={iconSize} height={iconSize} />
                                                {skill.skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={styles.lowerContainer}>
                                    <h4 className={styles?.location}>{item?.location}</h4>
                                    <h4 className={styles.status} style={{ backgroundColor: getBackgroundColor(item?.status) }}>{item?.status}<Image src={getStatusSymbol(item?.status)} width={statusSize} height={statusSize} /></h4>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className={styles.tempContainer}>
                        <Image src='/SearchEmpty.gif' width={200} height={200} />
                        <h3>You haven’t posted any jobs yet...</h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Jobs;