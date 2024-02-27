import AdminCandRep from './AdminCandRep';
import styles from './Body.module.css';
import CandidateReports from './CandidateReports';
import ClientList from './ClientsList';
import Jobs from './Jobs';

const Body = ({
    setIsLoading,
    isLoading,
    data,
    candidateReps, 
    jobOverlay,
    setJobOverlay,
    reportOverlay,
    setReportOverlay,
    setSelectedJob,
    setSelectedCandidate
}) => {

    return (
        <>
            <div className={styles.body}>
                <Jobs isLoading={isLoading} setIsLoading={setIsLoading} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} data={data} setSelectedJob={setSelectedJob} />
                <CandidateReports isLoading={isLoading} setIsLoading={setIsLoading} candidateReps={candidateReps} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} reportOverlay={reportOverlay} />
            </div>
        </>
    )
}

export default Body;