import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const JobTypeBtns = ({showErrorMessage, onContinue, onBack , showSuccess, setMessage ,showError}) => {
    const navigationIconSize = 30;

    const handleCreatJobBtn = () => {
        if (showErrorMessage===false) {
            setMessage("Please fill all the fields")
            showError(); 
        } else {
            onContinue();
            setMessage("Your job has been created successfully");
            showSuccess(); 
        }
    }

    return (    
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onBack} ><Image src='/backward.svg' width={navigationIconSize} height={navigationIconSize} />Back</button>
                <button id={styles.forwardBtn} onClick={handleCreatJobBtn} >Create Job<Image src='/Case.svg' width={navigationIconSize} height={navigationIconSize} /></button>
            </div>
        </>
    );
}

export default JobTypeBtns