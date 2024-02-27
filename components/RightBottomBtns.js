import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const RightBottomBtns = ({ onContinue, onBack, setCompletedStages, completedStages, onClose }) => {

    const navigationIconSize = 30;

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onClose}><Image src='/backward.svg' width={navigationIconSize} height={navigationIconSize} />Back</button>
                <button id={styles.forwardBtn} onClick={onContinue} >Continue <Image src='/Forward.svg' width={navigationIconSize} height={navigationIconSize} /></button>
                
            </div>
        </>
    )
}

export default RightBottomBtns;