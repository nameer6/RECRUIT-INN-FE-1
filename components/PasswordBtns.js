import styles from './RightBottomBtns.module.css';

import Image from 'next/image';

const PasswordBtns = ({ handleFormSubmit }) => {

    const navigationIconSize = 30;
    const forwardBtn = 20;
    
    return (
        <>
            <div className={styles.btnsContainer} >
                <button id={styles.forwardBtn} onClick={handleFormSubmit} >Login<Image src='/Forward.svg' width={forwardBtn} height={forwardBtn}  /></button>
            </div>
        </> 
    )
}

export default PasswordBtns;