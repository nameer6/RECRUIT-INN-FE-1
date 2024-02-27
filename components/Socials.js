import styles from './Socials.module.css';
import Image from 'next/image';


const Socials = () => {
    const handWave = 25;
    const socialIconSize = 40;
    const arrowSize = 25;

    return (
        <>
            <div className={styles.superConatainer}>
                <div className={styles.container}>
                    <div className={styles.headingContainer}>
                        <h3>
                            Connect With Us
                            <Image src='./hand.svg' width={handWave} height={handWave} />
                        </h3>
                    </div>

                    <div className={styles.contentContainer}>
                        <div className={styles.social}>
                            <div className={styles.info}>
                                <Image id={styles.logoImage} src='/Xspace.svg' height={socialIconSize} width={socialIconSize} />
                                <div className={styles.textContainer}>
                                    <h3>X</h3>
                                    <span>@recruitinn.ai</span>
                                </div>
                            </div>
                            <Image src='/rightArrow.svg' height={arrowSize} width={arrowSize} />
                        </div>

                        <div className={styles.social}>
                            <div className={styles.info}>
                                <Image id={styles.logoImage} src='/linkedin.svg' height={socialIconSize} width={socialIconSize} />
                                <div className={styles.textContainer}>
                                    <h3>LinkedIn</h3>
                                    <span>/recruitinn.ai</span>
                                </div>
                            </div>
                            <Image src='/rightArrow.svg' height={arrowSize} width={arrowSize} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Socials;