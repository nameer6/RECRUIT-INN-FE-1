import SetPasswordOverlay from '../../../components/SetPasswordOverlay';
// import styles from './set-password.module.css';
import { useRouter } from 'next/router';

const SetPassword = () => {

    const router = useRouter();
    const {id} = router?.query;
    console.log("router id:", id)
    const stages = {
        SET_PASSWORD: 'SET_PASSWORD',   
    }

    const stageHeadings = {
        SET_PASSWORD: 'Set your password up and be ready to login!',
    };

    const showOverlay = true;

    return(
        <>
            <SetPasswordOverlay showOverlay={showOverlay} stages={stages} stageHeadings={stageHeadings} />
        </>
    )
}

export default SetPassword;