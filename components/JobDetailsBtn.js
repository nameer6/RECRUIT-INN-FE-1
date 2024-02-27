import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const JobDetailsBtn = ({ onContinue , onBack , setCompletedStages, completedStages, onClose }) => {

    const navigationIconSize = 30;

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.forwardBtn} onClick={onContinue} >Continue <Image src='/Forward.svg' width={navigationIconSize} height={navigationIconSize}  /></button>
            </div>
        </> 
    )
}

export default JobDetailsBtn;