import styles from './RightBottomBtns.module.css';
import Image from 'next/image';

const ShareLinkBtns = ({ onContinue , onBack , onClose, setCompletedStages, completedStages, handleEmailInvite, setMessage, showSuccess }) => {

    const navigationIconSize = 20;

    async function handleSendInvite() {
        await handleEmailInvite();
        setMessage('An invitation has been sent to the candidate via email')
        showSuccess();
        onClose();
    }

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.backBtn} onClick={onClose} >Skip Invitation</button>
                <button id={styles.forwardBtn} onClick={handleSendInvite} >Send Invite<Image src='/send.svg' width={navigationIconSize} height={navigationIconSize}  /></button>
            </div>
        </> 
    )
}

export default ShareLinkBtns;