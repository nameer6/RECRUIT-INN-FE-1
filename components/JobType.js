import EditingContainer from './EditingContainer';
import JobInfoFields from './JobInfoFields';
import styles from './JobType.module.css';

const JobType = ({positionRef,jobTypeRef, descriptionRef, locationRef, setPosition,setLocation,setJobtype,setDescription}) => {

    return(
        <>
            <div className={styles.jobTypeContainer}>
                <JobInfoFields positionRef={positionRef} jobTypeRef={jobTypeRef} locationRef={locationRef} setPosition={setPosition} setLocation={setLocation} setJobtype={setJobtype} />
                <EditingContainer descriptionRef={descriptionRef} setDescription={setDescription} />    
            </div>
        </>
    );
}

export default JobType;