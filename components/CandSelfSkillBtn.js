import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const CandSelfSkillBtns = ({ handleTestPreparation, onContinue , onBack , setCompletedStages, completedStages, onClose }) => {

    const navigationIconSize = 30;

    const handleClick = () => {
        handleTestPreparation();
        onContinue();
    }

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onBack}><Image src='/backward.svg' width={navigationIconSize} height={navigationIconSize} />Back</button>
                <button id={styles.forwardBtn} onClick={handleClick} >Continue <Image src='/Forward.svg' width={15} height={15}  /></button>
            </div>
        </> 
    )
}

export default CandSelfSkillBtns;