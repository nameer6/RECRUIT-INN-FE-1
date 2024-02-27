import styles from './ClientList.module.css';
import Image from 'next/image';

const ClientList = () => {

    const data = [
        {
            company_name: 'Warren Brothers',
            account_user: 'Jacob Jones',
            location: 'Karachi, Pakistan',
            phone_no: '+92 342 1224162',
            email: 'jacob.jones@gmail.com'
        },
        {
            company_name: 'Warren Brothers',
            account_user: 'Jacob Jones',
            location: 'Karachi, Pakistan',
            phone_no: '+92 342 1224162',
            email: 'jacob.jones@gmail.com'
        },
    ]

    const goToAllIconSize = 15;

    return (
        <>
            <div className={styles.superContainer}>

                <div className={styles.headingContainer}>
                    <div className={styles.heading} >
                        <h3>Client Requests</h3>
                        <span>1000</span>
                    </div>

                    <Image src="/goAll.svg" width={goToAllIconSize} height={goToAllIconSize} />
                </div>

                {data.map((item) => {
                    return (
                        <>
                            <div className={styles.clientReq}>

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
                })}
            </div>
        </>
    )
}

export default ClientList;