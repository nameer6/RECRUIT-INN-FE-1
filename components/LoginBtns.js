import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const LoginBtns = ({ loginApiCall, onContinue , onBack , setCompletedStages, completedStages, onClose }) => {

    const navigationIconSize = 30;

    const handleSubmit = (e) => {
        e.preventDefault();
        loginApiCall();
    };

    return (
        <>
            <div className={styles.btnsContainer}>
                <button id={styles.forwardBtn} onClick={handleSubmit} >Continue <Image src='/Forward.svg' width={navigationIconSize} height={navigationIconSize}  /></button>
            </div>
        </> 
    )
}

export default LoginBtns;