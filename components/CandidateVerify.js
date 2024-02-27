import styles from './CandidateVerify.module.css';
import Image from 'next/image';

const CandidateVerify = ({otp,setOtp ,isCodeInvalid}) => {

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
            <div className={styles.coverContainer}>
                <div className={styles.banner}>
                    <div className={styles.leftContainer}>
                        <h2>Enter Verification Code</h2>
                        <p>Enter the 6-digit verification</p>
                        <p>send to <span>*******@gmail.com</span></p>

                        <div className={styles.otpContainer}>
                            {/* <input />
                            <input />
                            <input />
                            <input />
                            <input />   
                            <input /> */}
                            {otp.map((data, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            ))}
                        </div>
                        {/* {isCodeInvalid && <p style={{ color: 'red' }}>Invalid code entered. Please try again.</p>} */}

                        <p id={styles.margin}>Didn't receive the code? <span> Resend code </span></p>
                    </div>

                    <div className={styles.imageDiv}>
                        <Image src='/Element.png' width={160} height={160} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CandidateVerify;