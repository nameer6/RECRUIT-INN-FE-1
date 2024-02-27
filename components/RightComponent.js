// import Graph from './Graph';
import styles from './RightComponent.module.css';
import Image from 'next/image';
import Socials from './Socials';
// import { useState } from 'react';
import Overlay from './Overlay';

import dynamic from 'next/dynamic';

const Graph = dynamic(
    () => import('../components/Graph'), // Adjust the path as needed
    { ssr: false }
);


const RightComponent = ({ setShowOverlay, showOverlay }) => {
    const iconSize = 15;
    const bellIconSize = 20;

    const openAddJobHandler = () => {
        setShowOverlay(true)
    }

    return (
        <>
            <div className={styles.superContainer}> 
                <div className={styles.masterConatiner}>
                    <div className={styles.btnsDiv}>
                        <button className={styles.addJobBtn} onClick={openAddJobHandler}><Image src='/Add.svg' width={iconSize} height={iconSize} />  Create A Job</button>
                        <button className={styles.notificationsBtn}><Image src="/BellIcon.svg" width={bellIconSize} height={bellIconSize} /></button>
                    </div>
                    <Graph />
                    <Socials />
                </div>

            </div>
        </>
    )
}

export default RightComponent;