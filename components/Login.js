import styles from './Login.module.css';
import Image from 'next/image';

const LoginComp = ({setPassword,setEmail, onViewChange}) => {
    return (
        <>
            <div className={styles.superContainer}>
                <div className={styles.banner}>
                    <Image src='/bigHand.png' width={100} height={100} />
                    <h1>Welcome Back, Fill below fields</h1>
                    <div className={styles.imageDiv}>
                        <Image src='/Element.png' width={80} height={80} />
                    </div>
                </div>
                
                <div className={styles.inputFieldsContainer}>
                    <div className={styles.inputField}><Image src='/msg.svg' width={20} height={20} /> <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' /></div>
                    <div className={styles.inputField}><Image src='/lock.svg' width={20} height={20} /> <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Enter your password' /></div>
                </div>

                <div className={styles.midContainer}>   
                    <div className={styles.checkBox}>
                        <input type='checkbox' placeholder='Remember Password for 15 Days' />
                        <label>Remember Password for 7 Days</label>
                    </div>

                    <p onClick={onViewChange}>Forgot Password?</p>
                </div>
            </div>
        </>
    )
}

export default LoginComp;