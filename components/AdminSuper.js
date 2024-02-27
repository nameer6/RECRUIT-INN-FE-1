import styles from './AdminSuper.module.css';
import JobsHub from './JobsHub';
import TopNavbar from './TopNavbar';
import Image from 'next/image';
import { useActiveItem } from '../src/contexts/ActiveItemContext';
import CandidatesHub from './CandidatesHub';
import ClientReqHub from './ClientReqHub';
import CandRepHub from './CandRepHub';
import ClientJobs from './ClientsJobs';
import AdminTopNavbar from './AdminTopNavbar';
import { useState } from 'react';

const AdminSuper = ({
    allClients,
    inActiveClientsData,
    activeClientsData,
    reqData,
    allData,
    activeData,
    closedData,
    allCandidates,
    recommendedCandidates,
    qualifiedCandidates,
    notEligibleCandidates,
    reportOverlay,
    setReportOverlay,
    jobOverlay,
    setJobOverlay,
    setSelectedCandidate,
    setSelectedJob,
    onOpen,
    setShowOverlay,
    setData,
    data
}) => {


    const iconSize = 15;
    const bellIconSize = 20;

    const openAddClientHandler = () => {
        setShowOverlay(true)
    }

    return (
        <>
            <div className={styles.superContainer}>

                <div className={styles.topContainer}>
                    <div className={styles.searchContainer}>
                        <AdminTopNavbar />
                    </div>
                    <div className={styles.btnsDiv}>
                        <button className={styles.addJobBtn} onClick={openAddClientHandler}><Image src='/Add.svg' width={iconSize} height={iconSize} />Create A Client</button>
                        <button className={styles.notificationsBtn}><Image src="/BellIcon.svg" width={bellIconSize} height={bellIconSize} /></button>
                    </div>
                </div>

                {allData ? (
                    <JobsHub  data={data} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob} />
                ) : activeData ? (
                    <JobsHub data={data} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob} />
                ) : closedData ?6 (
                    <JobsHub data={data} jobOverlay={jobOverlay} setJobOverlay={setJobOverlay} setSelectedJob={setSelectedJob} />
                ) : allCandidates ? (
                    <CandRepHub heading='All Candidates' data={allCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : recommendedCandidates ? (
                    <CandRepHub heading='Recommended Candidates' data={recommendedCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : qualifiedCandidates ? (
                    <CandRepHub heading='Qualified Candidates' data={qualifiedCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : notEligibleCandidates ? (
                    <CandRepHub heading='Not Eligible Candidates' data={notEligibleCandidates} reportOverlay={reportOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} />
                ) : reqData ? (
                    <ClientReqHub heading='Client Requests' dataToBeSet={data} setData={setData} data={reqData} onOpen={onOpen} />
                ) : allClients ? (
                    <ClientReqHub heading='All Clients' dataToBeSet={data} setData={setData} data={allClients} />
                ) : activeClientsData ? (
                    <ClientReqHub heading='Active Clients' setData={setData} dataToBeSet={data} data={activeClientsData} />
                ) : inActiveClientsData ? (
                    <ClientReqHub heading='In-Active Clients' setData={setData} dataToBeSet={data} data={inActiveClientsData} />
                ) : data ? (
                    <ClientJobs heading='In-Active Clients' setData={setData} data={data} setSelectedJob={setSelectedJob} setJobOverlay={setJobOverlay} jobOverlay={jobOverlay} />
                ) : ''
                }

            </div>
        </>
    )
}

export default AdminSuper