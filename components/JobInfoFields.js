import styles from './JobInfoFields.module.css';
import Image from 'next/image';


const JobInfoFields = ({positionRef,jobTypeRef, locationRef, setPosition,setLocation,setJobtype}) => {

    const iconSize = 20;

    return (
        <>
            <div className={styles.fieldsContainer}>
                <div className={styles.conatiner} >
                    <Image src='/suitcase.svg' width={iconSize} height={iconSize} />
                    <input type='text' placeholder='Add Job Title' ref={positionRef} />
                </div>
        
                <div className={styles.conatiner} >
                <Image src='/location.svg' width={iconSize} height={iconSize} />
                <input type='text' placeholder='Anywhere' ref={locationRef} />
                </div>
            </div>

            <div className={styles.wrapper}>
                    <Image src='/suitcase.svg' width={iconSize} height={iconSize} />
                    <select ref={jobTypeRef} >
                        <option value="On-site">On-site</option>
                        <option value="Remote">Remote</option>
                    </select>
            </div>
        </>
    );
}

export default JobInfoFields