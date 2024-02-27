import InvitationOverlay from '../../components/InvitationOverlay';
import Overlay from '../../components/Overlay';
import styles from './invited-candidate.module.css';
import { useState } from 'react';

const invitedCandidate = () => {
    const stages = {
        JOB_DETAIL: 'JOB_DETAIL',
        PERSONAL_INFO: 'PERSONAL_INFO',
        REQUIRED_SKILLS: 'REQUIRED_SKILLS'
    }

    const stageHeadings = {
        JOB_DETAIL: 'Youve been invited for the interview',
        PERSONAL_INFO: 'Hello there, tell us about yourself',
        REQUIRED_SKILLS: 'Technologies you will be asked for',
    };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [message, setMessage] = useState(null);

    const showSuccess = () => {
        setShowSuccessMessage(true);
  
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 3000);
    };

    const showOverlay = true;
    return (
        <>
            <InvitationOverlay message={message} setMessage={setMessage} showSuccess={showSuccess} showSuccessMessage={showSuccessMessage} showOverlay={showOverlay} stages={stages} stageHeadings={stageHeadings} />
        </>
    );
}

export default invitedCandidate;