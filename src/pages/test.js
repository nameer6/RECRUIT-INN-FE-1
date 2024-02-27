import QuestionBox from '../../components/QuestionBox';
import TestInstruction from '../../components/TestInstruction';
import styles from './test.module.css';
import { useState } from 'react';

const test = () => {

    const [instructionsPopup,setInstructionsPopup] = useState(true);

    const closePopup = () => {
        setInstructionsPopup(false);
    }

    return(
        <>
            {instructionsPopup && <TestInstruction onClose={closePopup} />}
            <div className={styles.superContainer}>
                <QuestionBox />
            </div>
        </>
    )
}

export default test;