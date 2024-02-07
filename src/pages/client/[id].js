import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';
import SideNavbar from '../../../components/SideNavbar';
import SuperComponent from '../../../components/SuperComponent';
import TopNavbar from '../../../components/TopNavbar';
import RightComponent from '../../../components/RightComponent';
import { useState, useEffect } from 'react';
import Overlay from '../../../components/Overlay';
import { useActiveItem } from '../../contexts/ActiveItemContext';
import Super from '../../../components/Super';
import jobData from '../../data/jobsDummyData';
import CandData from '../../data/candDummyData';
import ReportOverlay from '../../../components/ReportOverlay';
import JobOverlay from '../../../components/JobOverlay';
import { useRouter } from 'next/router';
// import ShareLink from '../../../components/ShareLink';
import SuccessIndicator from '../../../components/SuccessIndicator';
import ErrorIndicator from '../../../components/ErrorIndicator';

const inter = Inter({ subsets: ['latin'] })


export default function Home({ allJobsData, allActiveJobsData, allClosedJobsData }) {
  const router = useRouter();
  const { id } = router?.query;

  console.log("all jobs data :", allJobsData)
  console.log("all active jobs data :", allActiveJobsData);
  console.log("all closed jobs data :", allClosedJobsData);
  const [finalData, setFinalData] = useState(null);
  const [allCandidatesReports, setAllCandidateReports] = useState();
  const [preprocessedCandidates, setPreprocessedCandidates] = useState([]);
  const [token, setToken] = useState(null);
  const [recommendedCand, setRecommendedCand] = useState([]);
  const [qualifiedCand, setQualifiedCand] = useState([]);
  const [notEligibleCand, setNotEligibleCand] = useState([]);
  const [activeJobsData, setActiveJobsData] = useState(null);
  const [closedJobsData, setClosedJobsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [companyName, setCompanyName] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('client-token');
    async function fetchAllPositions() {
      const requestBody = { company_id: id };
      setIsLoading(true)
      const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-all-positions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(requestBody),
        });
      console.log('response: ', response);
      const allData = await response.json();
      setFinalData(allData.data)
      setIsLoading(false)
      console.log('jsonified response: ', allData.data);

    }
    if (token) {
      fetchAllPositions()
    }
  }, [id])

  useEffect(() => {
    if (Array.isArray(finalData)) {
      const filterActive = (job) => job?.status === 'Active';
      const filterClosed = (job) => job?.status === 'Closed';

      setActiveJobsData(finalData.filter(filterActive));
      setClosedJobsData(finalData.filter(filterClosed));
    } else {
      console.log('finalData is not an array:', finalData);
    }
  }, [finalData]);

  useEffect(() => {
    let isMounted = true;
    localStorage.setItem('clientId', id);
    const token = localStorage.getItem('client-token');
    setToken(token)
    async function fetchAllCandidateReports() {
      const requestBody = { company_id: id };
      setIsLoading(true)

      const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}get-results-by-company`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(requestBody),
        });
      console.log('response: ', response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const allData = await response.json();
      if (isMounted) {
        setAllCandidateReports(allData);
        setIsLoading(false);
      }
      console.log('jsonified candidates response: ', allCandidatesReports);
    }
    fetchAllCandidateReports()
    return () => {
      isMounted = false;
    };
  }, [])

  const preprocessCandidatesData = (candidates, company) => {
    return candidates.map(candidate => {
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

      return {
        name: candidate.name,
        email: candidate.email,
        position: candidate.position,
        score: score.toFixed(1),
        contactNo: candidate.contact_no,
        date: formattedDate,
        expertise: candidate.expertise ? candidate.expertise.techStack : [],
        jobType: candidate.expertise ? candidate.expertise.jobtype : 'N/A',
        position: candidate.expertise ? candidate.expertise.position : 'N/A',
        overAllExperience: candidate.over_all_exp || 'N/A',
        results: {
          softskillRating: latestResult.softskillRating,
          technicalRating: latestResult.technicalRating,
          softskillAssessment: latestResult.softskillAssessment,
          technicalAssessment: latestResult.technicalAssessment
        },
        company: {
          name: company.company_name,
          location: company.company_location,
          email: company.email,
          contactNo: company.contact_no,
          status: company.status
        }
      };
    });
  };

  useEffect(() => {
    async function fetchClientInfo() {
      const reqBody = {
        id
      }
      console.log("req body:", reqBody)
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/get-one-company`,
          {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(reqBody)
          })
        const data = await response.json();
        setCompanyName(data?.data?.company_name);
        localStorage.setItem('clientName', companyName);
        console.log("company self data:", data);
      } catch (err) {
        console.log("ERROR:", err);
      }
    }
    if (id) {
      fetchClientInfo();
    }
  }, [id])

  console.log("Company Data:", allCandidatesReports);
  console.log("Candidates Data:", allCandidatesReports?.data?.candidates);
  console.log("testing:", allCandidatesReports?.data?.candidates)

  useEffect(() => {
    if (allCandidatesReports?.data?.candidates && allCandidatesReports?.data) {
      const processedData = preprocessCandidatesData(allCandidatesReports.data.candidates, allCandidatesReports.data);
      setPreprocessedCandidates(processedData);
      console.log('pre processed data:', preprocessedCandidates)

      const filterRecommended = (candidate) => Math.ceil(candidate?.results?.technicalRating) >= 7 && Math.ceil(candidate?.results?.technicalRating) <= 10;
      const filterQualified = (candidate) => Math.ceil(candidate?.results?.technicalRating) >= 5 && Math.ceil(candidate?.results?.technicalRating) < 7;
      const filterNotEligible = (candidate) => Math.ceil(candidate?.results?.technicalRating) < 5;

      setRecommendedCand(processedData.filter(filterRecommended));
      setQualifiedCand(processedData.filter(filterQualified));
      setNotEligibleCand(processedData.filter(filterNotEligible));
      console.log('Recommended Candidate:', recommendedCand);
      console.log('Qualified Candidate:', qualifiedCand);
      console.log('Not Eligible Candidate:', notEligibleCand);
    }
  }, [allCandidatesReports]);

  const { activeItem } = useActiveItem();
  const [showOverlay, setShowOverlay] = useState(false);
  const [reportOverlay, setReportOverlay] = useState(false);
  const [jobOverlay, setJobOverlay] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [message, setMessage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const showError = () => {
    setShowErrorMessage(true);

    setTimeout(() => {
      setShowErrorMessage(false);
    }, 3000);
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const stages = {
    ADD_SKILL: 'ADD_SKILL',
    JOB_TYPE: 'JOB_TYPE',

    AI_ASSESSMENT: 'AI_ASSESSMENT',
    SHARE_LINK: 'SHARE_LINK'
  }

  const stageHeadings = {
    ADD_SKILL: 'Add Skills',
    JOB_TYPE: 'Enter Job Details',
    AI_ASSESSMENT: 'Your Job Is Created Successfully',
    SHARE_LINK: 'Share the link with candidates'
  };

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }

  const toggleReportOverlay = () => {
    setReportOverlay(!reportOverlay);
  }

  const toggleJobOverlay = () => {
    setJobOverlay(!jobOverlay);
  }

  const getActiveComponent = () => {
    switch (activeItem) {
      case 'Dashboard':
        return <>
          <SuperComponent
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            candidateReps={preprocessedCandidates}
            data={finalData}
            setJobOverlay={setJobOverlay}
            jobOverlay={jobOverlay}
            setReportOverlay={setReportOverlay}
            reportOverlay={reportOverlay}
            setSelectedCandidate={setSelectedCandidate}
            setSelectedJob={setSelectedJob}
          />
          <RightComponent setShowOverlay={setShowOverlay} showOverlay={showOverlay} />
        </>;
      case 'AllJobs':
        return <Super setJobOverlay={setJobOverlay} reportOverlay={jobOverlay} finalData={finalData} toggleOverlay={toggleOverlay} setSelectedJob={setSelectedJob} />
      case 'Active':
        return <Super setJobOverlay={setJobOverlay} reportOverlay={jobOverlay} activeJobsData={activeJobsData} toggleOverlay={toggleOverlay} setSelectedJob={setSelectedJob} />
      case 'Closed':
        return <Super setJobOverlay={setJobOverlay} reportOverlay={jobOverlay} closedJobsData={closedJobsData} toggleOverlay={toggleOverlay} setSelectedJob={setSelectedJob} />
      case 'All':
        return <Super setReportOverlay={setReportOverlay} reportOverlay={reportOverlay} allCandidates={preprocessedCandidates} setSelectedCandidate={setSelectedCandidate} toggleOverlay={toggleOverlay} />
      case 'Recommended':
        return <Super setReportOverlay={setReportOverlay} reportOverlay={reportOverlay} recommendedCandidates={recommendedCand} setSelectedCandidate={setSelectedCandidate} toggleOverlay={toggleOverlay} />
      case 'Qualified':
        return <Super setReportOverlay={setReportOverlay} reportOverlay={reportOverlay} qualifiedCandidates={qualifiedCand} setSelectedCandidate={setSelectedCandidate} toggleOverlay={toggleOverlay} />
      case 'NotEligible':
        return <Super setReportOverlay={setReportOverlay} reportOverlay={reportOverlay} notEligibleCandidates={notEligibleCand} setSelectedCandidate={setSelectedCandidate} toggleOverlay={toggleOverlay} />
      default:
        return null;
    }
  };

  return (
    <>
      {showErrorMessage && <ErrorIndicator showErrorMessage={showErrorMessage} msgText={message} />}
      {showSuccessMessage && <SuccessIndicator showSuccessMessage={showSuccessMessage} msgText={message} />}
      {showOverlay && <Overlay showError={showError} showErrorMessage={showErrorMessage} showSuccessMessage={showSuccessMessage} setMessage={setMessage} showSuccess={showSuccess} message={message} token={token} set onClose={toggleOverlay} showOverlay={showOverlay} stages={stages} stageHeadings={stageHeadings} />}
      {reportOverlay && <ReportOverlay onClose={toggleReportOverlay} reportOverlay={reportOverlay} selectedCandidate={selectedCandidate} />}
      {jobOverlay && <JobOverlay onClose={toggleJobOverlay} jobOverlay={jobOverlay} selectedJob={selectedJob} />}
      <div className={styles.clientPortal}>
        <SideNavbar />
        {getActiveComponent()}
      </div>
    </>
  )
}

