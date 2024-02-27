import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const CandidateVerifyBtns = ({ onContinue, onBack }) => {
    const navigationIconSize = 30;

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onBack}><Image src='/backward.svg' width={navigationIconSize} height={navigationIconSize} />Back</button>
                <button id={styles.forwardBtn} onClick={onContinue} >Continue <Image src='/Forward.svg' width={15} height={15} /></button>
            </div>
        </>
    )
}   

export default CandidateVerifyBtns;