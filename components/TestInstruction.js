import styles from './TestInstruction.module.css';
import Image from 'next/image';

const TestInstruction = ({onClose}) => {

    return (
        <>
            <div className={styles.backDropContainer}>
                <div className={styles.instructionsBox}>
                    <div className={styles.container}>
                        <h3>Assesment Instructions</h3>

                        {/* instruction lists */}
                        <div className={styles.instructionsContainer}>

                            <ul className={styles['custom-bullets']}>
                                <li>
                                    Make sure your connection is stable.
                                </li>
                                <li>
                                Your score will reflect on your profile.                                </li>
                                <li>
                                Your score will reflect on your profile.                                </li>
                                <li>
                                Make sure there’s no background noise while answering the questions.                                </li>
                            </ul>
                        </div>

                        {/* closing button */}
                        <div className={styles.lowerContainer}>
                            <button onClick={onClose}>Let's Start <Image src='/forward.svg' width={15} height={15} /> </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TestInstruction;

