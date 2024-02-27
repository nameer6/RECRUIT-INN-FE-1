import styles from './PasswordConfirm.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';


const PasswordConfirm = ({setPassword,password}) => {

    const [confirmPassword,setConfirmPassword] = useState(null);
    const [pass,setPass] = useState(null);

    useEffect(() => {
        const checkPassword = () => {
            if(pass === confirmPassword){
                setPassword(pass);
            }
        }
        checkPassword();
    },[confirmPassword]);

    return (
        <>
            <div className={styles.parentContainer}>
                <div className={styles.banner}>
                    <div className={styles.leftContainer}>
                        <Image src='/successIndicator.svg' width={90} height={90} />
                        <p className='passwordhead'>
                            Welcome Abroad, Client Name
                        </p>
                    </div>

                    <div className={styles.imgDiv}>
                        <Image src='/Element.png' width={90} height={90} />
                    </div>
                </div>

                <div className={styles.inputFieldContainer}>
                    <div className={styles.inputField}>
                        <Image src='/password.svg' width={25} height={25} />
                        <input placeholder='Set Password' type='password' onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className={styles.inputField}>
                        <Image src='/password.svg' width={25} height={25} />
                        <input placeholder='Confirm Password' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordConfirm;