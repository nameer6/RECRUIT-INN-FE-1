import AdminSideNavbar from '../../components/AdminSideNavbar';
import AdminSuperComponent from '../../components/AdminSuperComponent';
import RightComponent from '../../components/RightComponent';
import styles from './admin-dashboard.module.css';
import { useActiveItem } from '../contexts/ActiveItemContext';
import AdminSuper from '../../components/AdminSuper';
import { reqdata, allClientsData, activeClientsData, inActiveClientsData } from '@/data/dummyClientReq';
import { allCandidates, notEligibleCandidates, recommendedCandidates, qualifiedCandidates } from '@/data/candDummyData';
import { useState, useEffect } from 'react';
import ReportOverlay from '../../components/ReportOverlay';
import { individualData } from '@/data/jobsDummyData';
import JobOverlay from '../../components/JobOverlay';
import AdminOverlay from '../../components/AdminOverlay';
import AdminRightComponent from '../../components/AdminRightComponent';
import SuccessIndicator from '../../components/SuccessIndicator';

const Admin = ({ }) => {

    const [activeClientsData, setActiveClientsData] = useState(null);
    const [inActiveClientsData, setInActiveClientsData] = useState(null);
    const [requestedClientsData, setRequestedClientsData] = useState(null);
    const [preprocessedCandidates, setPreprocessedCandidates] = useState(null);
    const [recommendedCand, setRecommendedCand] = useState([]);
    const [qualifiedCand, setQualifiedCand] = useState([]);
    const [notEligibleCand, setNotEligibleCand] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    const [adminnToken, setAdminToken] = useState('');
    const [allClients, setAllClients] = useState();
    const [allResults, setAllResults] = useState();

    const showError = () => {
        setshowErrorMessage(true);

        setTimeout(() => {
            setshowErrorMessage(false);
        }, 3000);
    };

    const showSuccess = () => {
        setShowSuccessMessage(true);

        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    useEffect(() => {
        const adminToken = localStorage.getItem('admin-token');
        setAdminToken(adminToken);
    })

    useEffect(() => {
        if (Array.isArray(allClients?.data)) {
            const filterRequestsData = (client) => client?.status === 'Request';
            const filterActiveData = (client) => client?.status === 'Active';
            const filterInActiveData = (client) => client?.status === 'In-Active'

            setActiveClientsData(allClients?.data?.filter(filterActiveData));
            setInActiveClientsData(allClients?.data?.filter(filterInActiveData))
            setRequestedClientsData(allClients?.data?.filter(filterRequestsData));
        } else {
            console.log('allClients is not an array:', allClients);
        }
    }, [allClients]);

    const preprocessCandidatesData = (candidates) => {
        try{
            if (!candidates) {
                console.error("Candidates is undefined or null:", candidates);
                // handle the error or return a default value
                return [];
            }
    
            console.log("in pre processing method:",candidates)
            return candidates?.map(candidate => {
                let latestResult = {
                    softskillRating: 0,
                    technicalRating: 0,
                    softskillAssessment: "",
                    technicalAssessment: "",
                    createdAt: null
                };
    
                if (candidate.results && candidate.results.length > 0) {
                    const sortedResults = candidate.results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    latestResult = sortedResults[0].result || latestResult;
                    latestResult.createdAt = sortedResults[0].createdAt;
                }
    
                const score = (latestResult.softskillRating + latestResult.technicalRating) / 2;
                const formattedDate = latestResult.createdAt ? new Date(latestResult.createdAt).toLocaleDateString() : 'N/A';
    
                let expertiseTechStack = [];
                let jobType = 'N/A';
                let position = 'N/A';
                if (Array.isArray(candidate.expertise)) {
                    expertiseTechStack = candidate.expertise.map(e => ({
                        skill: e.skill,
                        level: e.level
                    }));
                } else if (candidate.expertise && typeof candidate.expertise === 'object') {
                    expertiseTechStack = candidate.expertise.techStack || [];
                    jobType = candidate.expertise.jobtype || 'N/A';
                    position = candidate.expertise.position || 'N/A';
                }
    
                return {
                    name: candidate.name,
                    email: candidate.email,
                    position: position,
                    score: score.toFixed(1),
                    contactNo: candidate.contact_no,
                    date: formattedDate,
                    expertise: expertiseTechStack,
                    jobType: jobType,
                    position: position,
                    overAllExperience: candidate.over_all_exp || 'N/A',
                    results: latestResult,
                    company: candidate.company || null,
                    appliedThrough: candidate?.company?.company_name || 'Self',
                    companyId: candidate?.company?.company_id
                };
            })
        }
        catch(err){
            console.log("ERROR:",err)
        }
    };


    console.log('checking:', allResults?.data?.candidates)

    useEffect(() => {
        if (allResults?.data) {
            const processedData = preprocessCandidatesData(allResults?.data, allResults?.data);
            setPreprocessedCandidates(processedData);
            console.log('pre processed data:', processedData)

            const filterRecommended = (candidate) => Math.ceil(candidate?.results?.technicalRating) >= 7 && Math.ceil(candidate?.results?.technicalRating) <= 10;
            const filterQualified = (candidate) => Math.ceil(candidate?.results?.technicalRating) >= 5 && Math.ceil(candidate?.results?.technicalRating) < 7;
            const filterNotEligible = (candidate) => Math.ceil(candidate?.results?.technicalRating) < 5;

            setRecommendedCand(processedData?.filter(filterRecommended));
            setQualifiedCand(processedData?.filter(filterQualified));
            setNotEligibleCand(processedData?.filter(filterNotEligible));
        }
    }, [allResults]);

    useEffect(() => {
        console.log('Recommended Candidate:', recommendedCand);
        console.log('Qualified Candidate:', qualifiedCand);
        console.log('Not Eligible Candidate:', notEligibleCand);
    }, [recommendedCand, qualifiedCand, notEligibleCand]);


    useEffect(() => {
        console.log('pre processed data:', preprocessedCandidates);
    }, [preprocessedCandidates]);

    console.log('all clients :', allClients);
    console.log('all results :', allResults);

    const [reportOverlay, setReportOverlay] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const [viewListing, setViewListing] = useState(false)
    const { activeItem } = useActiveItem();
    const [jobOverlay, setJobOverlay] = useState(false);
    const [data, setData] = useState(null);
    const [message , setMessage] = useState(null);

    const stages = {
        CLIENT_INFO: 'CLIENT_INFO',
    }

    const stageHeadings = {
        CLIENT_INFO: 'Adding A Client',
    };

    const toggleJobList = () => {
        setViewListing(!viewListing);
    }

    const toggleJobOverlay = () => {
        setJobOverlay(!jobOverlay);
    }

    useEffect(() => {
        console.log("show success msg state:", showSuccessMessage)
    }, [showSuccessMessage])

    const getActiveComponent = () => {
        switch (activeItem) {
            case 'Dashboard':
                return <>
                    <AdminSuperComponent setMessage={setMessage} showSuccessMessage={showSuccessMessage} showSuccess={showSuccess} allCandidates={preprocessedCandidates} setSelectedCandidate={setSelectedCandidate} setReportOverlay={setReportOverlay} selectedCandidate={selectedCandidate} />
                    <AdminRightComponent setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
                </>;
            case 'AllClients':
                return <AdminSuper data={data} setData={setData} setShowOverlay={setShowOverlay} onOpen={toggleJobList} allClients={allClients?.data} />
            case 'Request':
                return <AdminSuper data={data} setData={setData} setShowOverlay={setShowOverlay} onOpen={toggleJobList} reqData={requestedClientsData} />
            case 'Active':
                return <AdminSuper data={data} setData={setData} setShowOverlay={setShowOverlay} onOpen={toggleJobList} activeClientsData={activeClientsData} />
            case 'In-Active':
                return <AdminSuper data={data} setData={setData} setShowOverlay={setShowOverlay} onOpen={toggleJobList} inActiveClientsData={inActiveClientsData} />
            case 'All':
                return <AdminSuper setShowOverlay={setShowOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} allCandidates={preprocessedCandidates} />
            case 'Recommended':
                return <AdminSuper setShowOverlay={setShowOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} recommendedCandidates={recommendedCand} />
            case 'Qualified':
                return <AdminSuper setShowOverlay={setShowOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} qualifiedCandidates={qualifiedCand} />
            case 'NotEligible':
                return <AdminSuper setShowOverlay={setShowOverlay} setReportOverlay={setReportOverlay} setSelectedCandidate={setSelectedCandidate} notEligibleCandidates={notEligibleCand} />
            case 'viewJobListing':
                return <AdminSuper data={data} setData={setData} setShowOverlay={setShowOverlay} onOpen={toggleJobList} setSelectedJob={setSelectedJob} setJobOverlay={setJobOverlay} jobOverlay={jobOverlay} />
            default:
                return null;
        }
    };

    const toggleReportOverlay = () => {
        setReportOverlay(!reportOverlay);
    }

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    }

    

    useEffect(()=>{
        async function clientDataFetch(){

            const adminToken = localStorage.getItem('admin-token');
            setAdminToken(adminToken);
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-companies`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${adminToken}` 
                }
            });

            const data = await response.json();
            console.log("companies fetched:",data);
            setAllClients(data);
        }

        clientDataFetch();
    },[])

    useEffect(()=>{
        async function reportDataFetch(){

            const adminToken = localStorage.getItem('admin-token');
            setAdminToken(adminToken);
            const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-all-results`,
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${adminToken}` 
                }
            });

            const data = await response.json();
            console.log("companies fetched:",data);
            setAllResults(data);
        }

        reportDataFetch();
    },[])

    console.log('active clients data:', activeClientsData);
    console.log('in active clients data:', inActiveClientsData);    
    console.log('requetsed Clients data', requestedClientsData)

    return (
        <>
            {showSuccessMessage && <SuccessIndicator showSuccessMessage={showSuccessMessage} msgText={message} />}
            {showOverlay && <AdminOverlay adminToken={adminnToken} showError={showError} showErrorMessage={showErrorMessage} message={message} setMessage={setMessage} showSuccessMessage={showSuccessMessage} showSuccess={showSuccess}  showOverlay={showOverlay} onClose={toggleOverlay} stages={stages} stageHeadings={stageHeadings} />}
            {jobOverlay && <JobOverlay onClose={toggleJobOverlay} jobOverlay={jobOverlay} selectedJob={selectedJob} />}
            {reportOverlay && <ReportOverlay onClose={toggleReportOverlay} reportOverlay={reportOverlay} selectedCandidate={selectedCandidate} />}
            <div className={styles.adminPortal}>
                <AdminSideNavbar />
                {getActiveComponent()}
            </div>
        </>
    )
}

export default Admin;

export const getServerSideProps = async () => {


    try {

        const adminToken = localStorage.getItem('admin-token');
        console.log("************** ADMIND TOKEN *****************");
        console.log(adminToken);
        
        const response = await fetch('http://localhost:3002/v1/get-companies',
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${adminToken}` 
                }
            });
        console.log('response: ', response);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('jsonified response: ', data);

        const responseTwo = await fetch('http://localhost:3002/v1/get-all-results',
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${adminToken}` 
                }
            });
        console.log('response: ', response);
        if (!responseTwo.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const dataTwo = await responseTwo.json();
        console.log('jsonified response: ', dataTwo);
        return {
            props: {
                allClients: data,
                allResults: dataTwo
            },
        };
    } catch (error) {
        console.error("Failed to fetch companies:", error);
        return {
            props: {
                error: "Failed to fetch data",
            },
        };
    }
};  