import styles from './landingpage.module.css';
import Image from 'next/image';

const landingPage = () => {
    return(
        <>
            <div className={styles.superContainer}>
                <Image src='/zubairbhai.png' width={300} height={300} />
                <h1>Landing Page Coming Soon!</h1>
            </div>
        </>
    )
}

export default landingPage;