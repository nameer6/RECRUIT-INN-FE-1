import { Emilys_Candy } from 'next/font/google';
import styles from './ForgotPassword.module.css';
import { useEffect, useState } from 'react';

const ForgotPassword = ({email, setEmail, setEmailReceiver}) => {

    

    useEffect(() => {
        setEmailReceiver(email); 
    }, [email, setEmailReceiver]);
    
    

    return(
        <>
            <div className={styles.superContainer}>
                <h2>Enter your email to set a new password</h2>
                <p>
                    A link to set your new password will be sent to your email.
                </p>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
        </>
    )
}

export default ForgotPassword;