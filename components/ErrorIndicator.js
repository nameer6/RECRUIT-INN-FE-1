import styles from './SuccessMessage.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { useEffect, useState } from 'react';

const ErrorIndicator = ({showErrorMessage, showSuccessMessage ,msgText}) => {

    console.log("SuccessIndicator rendering: ", showSuccessMessage);

    

    return (
        <>
            <div className={showErrorMessage ? styles.show : styles.hide}>
                <div className={styles.successMsgContainer}>
                    <Image src='/ToastNotification.gif' height={80} width={80} />
                    <p className={styles.successMessage}>
                        {msgText}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ErrorIndicator;