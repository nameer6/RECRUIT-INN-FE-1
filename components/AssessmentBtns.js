import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const AssessmentBtns = ({showSuccess, setMessage, onContinue , onBack }) => {

    const navigationIconSize = 30;
    const forwardBtn = 20;

    const createAssesmentHandler = () => {
        onContinue();
        setMessage("Your job has been created successfully ");
        showSuccess();
    }

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onBack} ><Image src='/backward.svg' width={navigationIconSize} height={navigationIconSize} />Back</button>
                <button id={styles.forwardBtn} onClick={createAssesmentHandler} >Generate Test<Image src='/generateTxt.svg' width={forwardBtn} height={forwardBtn}  /></button>
            </div>
        </> 
    )
}

export default AssessmentBtns;