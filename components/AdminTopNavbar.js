import styles from './AdminTopNavbar.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const AdminTopNavbar = ({setMessage, showSuccess }) => {
    const searchLogoSize = 20;
    const iconSize = 15;

    const [randomKey, setRandomKey] = useState(uuidv4());

    const demolink = `http://localhost:3000/invited-candidate/${randomKey}`;

    function copyToClipboard(text) {
        if ('clipboard' in navigator) {
            return navigator.clipboard.writeText(text);
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            const result = document.execCommand('copy');
            document.body.removeChild(textarea);
            return result;
        }
    }

    function handleButtonClick() {
        setRandomKey(uuidv4()); 
        copyToClipboard(demolink);
        setMessage("Your link has been copied")
        showSuccess();
    }

    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.searchBar}>
                    <div className={styles.container}>
                        <div className={styles.searchInput}>
                            <Image src='/Search.svg' height={searchLogoSize} width={searchLogoSize} />
                            <input type='text' value="Search..." />
                        </div>

                        <div className={styles.selectCategory}>
                            <select>
                                <option value="Candidates">Candidates</option>
                                <option value="Clients">Clients</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onClick={handleButtonClick}>Invite A Candidate</button>
            </div>
        </>
    )
}

export default AdminTopNavbar;