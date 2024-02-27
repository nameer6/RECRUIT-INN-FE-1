import Body from './Body';
import RightComponent from './RightComponent';
import styles from './SuperComponent.module.css';
import TopNavbar from './TopNavbar';
import { useState } from 'react';

const SuperComponent = ({selectedCandidate, companyId, setIsLoading,isLoading, data, candidateReps, jobOverlay, setJobOverlay, reportOverlay, selectedJob, setReportOverlay, setSelectedJob, setSelectedCandidate
 }) => {

        const [jobOverlayVisible, setJobOverlayVisible] = useState(false);
        // const [selectedJob, setSelectedJob] = useState(null);

        const showJobOverlay = (job) => {
            setSelectedJob(job);
            setJobOverlay(true)
        };

        const showCandidateOverlay = (cand) => {
            setSelectedCandidate(cand);
            setReportOverlay(true);
        }

    return (
        <>
            <div className={styles.superContainer} >
                <TopNavbar onJobSelect={showJobOverlay} onCandidateSelect={showCandidateOverlay} companyId={companyId} />
                <Body
                    setIsLoading={setIsLoading}
                    isLoading
                    setSelectedCandidate={setSelectedCandidate}
                    setSelectedJob = {setSelectedJob}
                    data={data}
                    candidateReps={candidateReps}
                    jobOverlay={jobOverlay}
                    setJobOverlay={setJobOverlay}
                    reportOverlay={reportOverlay}
                    setReportOverlay={setReportOverlay}
                />
            </div>

        </>
    )
}

export default SuperComponent;