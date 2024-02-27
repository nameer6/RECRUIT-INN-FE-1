import styles from './ClientReqHub.module.css';
import Image from 'next/image';
import { useState } from 'react';
import ActiveClientCard from './ActiveClientCard';
import InActiveClientCard from './InActiveClientCard';
import RequestedClientCard from './RequestedClientCard';

const ClientReqHub = ({ data, onOpen, dataToBeSet, setData, heading }) => {

    console.log('data: ', data)
    const hasData = data && data.length > 0;

    return (
        <>
            <div className={styles.parentContainer}>
                <div className={styles.superContainer}>
                    <div className={styles.headingContainer}>
                        <div className={styles.heading}>
                            <h3>{heading}</h3>
                            <span>{data?.length}</span>
                        </div>
                    </div>

                    <div className={styles.subContainer}>
                        {hasData ? (
                            data?.map((item, index) => {
                                switch (item.status) {
                                    case 'Active':
                                        return <ActiveClientCard setData={setData} dataToBeSet={dataToBeSet} key={index} item={item} onOpen={onOpen} />
                                    case 'In-Active':
                                        return <InActiveClientCard onOpen={onOpen} setData={setData} dataToBeSet={dataToBeSet} key={index} item={item} />
                                    case 'request':
                                        return <RequestedClientCard onOpen={onOpen} setData={setData} dataToBeSet={dataToBeSet} key={index} item={item} />
                                    default:
                                        return null;
                                }
                            })
                        ) : (
                            <div className={styles.tempContainer}>
                                <Image src='/SearchEmpty.gif' width={300} height={300} />
                                <h3>You don't have {heading} yet...</h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientReqHub;