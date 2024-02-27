import JobsHub from './JobsHub';
import styles from './Super.module.css';
import TopNavbar from './TopNavbar';
import Image from 'next/image';
import { useActiveItem } from '../src/contexts/ActiveItemContext';
import CandidatesHub from './CandidatesHub';

const Super = ({
    companyId,
    activeJobsData,
    closedJobsData,
    finalData,
    allCandidates,
    recommendedCandidates,
    qualifiedCandidates,
    notEligibleCandidates,
    reportOverlay,
    setReportOverlay,
    jobOverlay,
    setJobOverlay,  
    setSelectedCandidate,
    toggleOverlay,
    setSelectedJob
}) => {

    const showJobOverlay = (job) => {
        setSelectedJob(job);
        setJobOverlay(true)
    };

    const showCandidateOverlay = (cand) => {
        setSelectedCandidate(cand);
        setReportOverlay(true);
    }

    const activeItem = useActiveItem();
    const iconSize = 15;
    const bellIconSize = 20;

    let dataToRender;
    switch (activeItem) {
        case 'AllJobs':
            dataToRender = finalData;
            break;
        case 'Active':
            dataToRender = activeJobsData;
            console.log('Rendering Active Jobs Data:', activeJobsData);
            break;
        case 'Closed':
            dataToRender = closedJobsData;
            break;
    }

    return (
        <>
            <div className={styles.superContainer}>

                <div className={styles.topContainer}>
                    <div className={styles.searchContainer}>
                        <TopNavbar companyId={companyId} onJobSelect={showJobOverlay} onCandidateSelect={showCandidateOverlay} />
                    </div>
                    <div className={styles.btnsDiv}>
                        <button className={styles.addJobBtn} onClick={toggleOverlay}><Image src='/Add.svg' width={iconSize} height={iconSize} />  Create A Job</button>
                        <button className={styles.notificationsBtn}><Image src="/BellIcon.svg" width={bellIconSize} height={bellIconSize} /></button>
                    </div>
                </div>

                {finalData ? (  
                    <JobsHub heading='All Jobs' data={finalData} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob} />
                ) : activeJobsData ? (
                    <JobsHub heading='Active Jobs' data={activeJobsData}  jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob}/>
                ) : closedJobsData ? (
                    <JobsHub heading='Closed Jobs' data={closedJobsData} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob} />
                ) : allCandidates ? (
                    <CandidatesHub heading='All Candidates' data={allCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : recommendedCandidates ? (
                    <CandidatesHub heading='Recommended Candidates' data={recommendedCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : qualifiedCandidates ? (
                    <CandidatesHub heading='Qualified Candidates' data={qualifiedCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : notEligibleCandidates ? (
                    <CandidatesHub heading='Not-Eligible Candidates' data={notEligibleCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : ''
                }
            </div>
        </>
    )
}

export default Super;