import styles from './RequestedClientCard.module.css';
import Image from 'next/image';

const RequestedClientCard = ({item}) => {
    return (
        <>
            <div>

                <div className={styles.topContainer}>
                    <div className={styles.leftDiv}>
                        <Image src='/company.svg' width={30} height={30} />
                        <div className={styles.companyName}>
                            <h2>{item?.company_name}</h2>
                            <span>{item?.account_user}</span>
                        </div>
                    </div>

                    <div className={styles.btnsDiv}>
                        <button id={styles.reject} >Reject</button>
                        <button id={styles.accept}>Accept</button>
                    </div>
                </div>

                <div className={styles.lowerContainer}>
                    <span>{item?.location}</span>
                    <span className={styles.dot}>{item?.phone_no}</span>
                    <span className={styles.dot}>{item?.email}</span>
                </div>
            </div>
        </>
    )
}

export default RequestedClientCard;