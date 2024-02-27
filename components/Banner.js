import styles from './Banner.module.css';
import Image from 'next/image';

const Banner = () => {

    const successIndicatorSize = 70;
    const rightImg = 200;

    return (<>
        <div className={styles.bannerContainer}>
            <div className={styles.container}>
                <div className={styles.leftContent}>
                    <Image src='/successIndicator.svg' width={successIndicatorSize} height={successIndicatorSize} />
                    <p>
                        Click on <span>Generate Test</span> to create AI Assessment for candidate
                    </p>
                </div>

                <div className={styles.rightContent}>
                    <Image src='/Element.png' width={250} height={280} />
                </div>
            </div>
        </div>
    </>)
}

export default Banner;