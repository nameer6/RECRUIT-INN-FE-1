import styles from './candidate-self.module.css';
import InvitationOverlay from '../../components/InvitationOverlay';
import SelfOverlay from '../../components/SelfOverlay';

const CandidateSelf = () => {

    const stages = {
        PERSONAL_INFO : 'PERSONAL_INFO',
        VERIFICATION : 'VERIFICATION',
        SKILLS : 'SKILLS',
        ASSESSMENT : "ASSESSMENT"
    }
    
    const stageHeadings = {
        PERSONAL_INFO : 'Hello There, Tell Us About Your Self',
        VERIFICATION : 'Please Verify Your Email',
        SKILLS : 'Tell Us About Your Skills',
        ASSESSMENT : "What Would You Like To Do?    "
    };

    const showOverlay = true;

    return (
        <>
            <SelfOverlay showOverlay={showOverlay} stages={stages} stageHeadings={stageHeadings} />
        </>
    );
}

export default CandidateSelf;