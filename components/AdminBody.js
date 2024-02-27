import AdminCandRep from './AdminCandRep';
import styles from './Body.module.css';
import CandidateReports from './CandidateReports';
import ClientList from './ClientsList';
import Jobs from './Jobs';

const AdminBody = ({setSelectedCandidate,selectedCandidate,setReportOverlay,allCandidates}) => {

    return (
        <>
            <div className={styles.body}>
                <ClientList />
                <AdminCandRep allCandidates={allCandidates} setSelectedCandidate={setSelectedCandidate} setReportOverlay={setReportOverlay} />
            </div>
        </>
    )
}

export default AdminBody;