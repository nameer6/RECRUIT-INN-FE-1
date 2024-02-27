import styles from './RightBottomBtns.module.css';

import Image from 'next/image';

const ForgotPasswordBtns = ({checkIfEmailIsInDbHandler, email, onClose }) => {

    const text = `Follow this link to set your new password: \n
    `
    const navigationIconSize = 30;

    // const handleEmailInvite = async () => {
    //     const requestBody = {
    //         to: emailReceiver,
    //         subject: subject,
    //         text: text
    //     }

    //     try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_REMOTE_URL}/sendMail`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${token}`,
    //             },
    //             body: JSON.stringify(requestBody),
    //         });
    //         const data = await response.json();
    //         console.log('resp:',data);
    //     } catch (error) {   
    //         console.error('Error submitting form:', error);
    //     }
    // }

    // async function handleSendInvite() {
    //     await handleEmailInvite();
    //     setMessage('An invitation has been sent to the candidate via email')
    //     showSuccess();
    //     onClose();
    // }

    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.forwardBtn} onClick={() => {
                    console.log("Handle forgot password for:", email);
                    checkIfEmailIsInDbHandler();
                }}>Reset Password<Image src='/Forward.svg' width={navigationIconSize} height={navigationIconSize}  /></button>
            </div>
        </> 
    )
}

export default ForgotPasswordBtns;