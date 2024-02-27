import styles from './CandSelfAssessment.module.css';
import Image from 'next/image';

const CandSelfAssessment = () => {

    return (
        <>
            <div className={styles.coverContainer}>
                <div className={styles.banner}>
                    <div className={styles.leftContainer}>
                        <h1>Would you like to take AI assessment now?</h1>

                        <p>
                            If you’d lke to take AI Assessment now click on <span> Start Assessment </span> to Get Started and if you’d like to take it Later click on <span>Later</span>
                        </p>
                    </div>

                    <div className={styles.imageDiv}>
                        <Image src='/Element.png' width={150} height={150} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandSelfAssessment;