import styles from './TrustedCandidates.module.css'; 
import Image from 'next/image';

const TrustedCandidates = () => {
    return (
        <div className={`container max-width:  w-[50%] max-md:w-[100%] bg-primary rounded-lg mb-[3rem]`}>
            <span className='text-smallText text-sm'>Trusted by many companies around the world.</span>    
            <div className={styles.logos}>
                <div className={styles["logos-slide"]}>
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyOne.svg' alt="client" width={120} height={80} className={styles.img} />
                    <Image src='/companyTwo.svg' alt="client" width={120} height={80} className={styles.img} />
                </div>
            </div>
        </div>
    );
};
export default TrustedCandidates;