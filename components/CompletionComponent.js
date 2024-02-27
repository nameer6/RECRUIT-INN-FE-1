import styles from './CompletionComponent.module.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CompletionComponent = () => {

    const imagsSize = 130;
    const iconSize = 20;
    const router = useRouter();

    const finishTestHandler = () =>  {
        router.push('/landing-page');
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.topContainer}>
                        <Image src='/completion.svg' width={imagsSize} height={imagsSize} />
                        <h3>Congratulations Zubair</h3>
                        <p>You've successfully completed your assessment</p>
                </div>

                <div className={styles.feedbackContainer}>
                    <textarea placeholder='If you’ve any feedback regarding to our AI Assessment process feel free to let us know.' ></textarea>
                </div>

                <div className={styles.lowerContainer}>
                    <button onClick={finishTestHandler}>
                        Finish <Image src='/Forward.svg' width={iconSize} height={iconSize} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default CompletionComponent;
