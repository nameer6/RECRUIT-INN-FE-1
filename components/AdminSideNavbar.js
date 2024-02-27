import { useState } from 'react';
import styles from '../components/SideNavbar.module.css'
import Image from 'next/image';
import { useActiveItem } from '../src/contexts/ActiveItemContext';


const AdminSideNavbar = ({ }) => {
    const { activeItem, setActiveItem } = useActiveItem();
    const [clickedItem, setClickedItem] = useState('');

    const [isDropDownJobsToggle, setIsDropDownJobsToggle] = useState(false);
    const [isDropDownCandidatesToggle, setIsDropDownJobsCandidatesToggle] = useState(false);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
        setClickedItem(itemName);
        setTimeout(() => setClickedItem(''), 200);
    }

    const handleDropDownJobsToggle = () => {
        setIsDropDownJobsToggle(!isDropDownJobsToggle)
    }

    const handleDropDownCandidatesToggle = () => {
        setIsDropDownJobsCandidatesToggle(!isDropDownCandidatesToggle)
    }

    const listItemSize = 18;
    const logoSize = 30

    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.logoContainer}>
                        <h3><Image src="/logo.svg" width={logoSize} height={logoSize} /> recruitinn.ai</h3>
                    </div>

                    <div className={activeItem === 'Dashboard' ? `${styles.dashboardButton} ${styles.active}` : `${styles.dash}`}
                        onClick={() => handleItemClick('Dashboard')}>
                        Dashboard
                        <Image src='/Feed.svg' width={listItemSize} height={listItemSize} />
                    </div>

                    <div className={styles.listContainer}>
                        <div className={styles.list}>
                            <h4>Clients <Image src='/dropdown.svg' width={15} height={15} onClick={handleDropDownJobsToggle} /></h4>
                            {isDropDownJobsToggle && (
                                <ul>
                                    <li
                                        className={
                                            activeItem === 'AllClients' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('AllClients')}>All <Image src='/All.svg' width={listItemSize} height={listItemSize} /></li>
                                    <li
                                        className={
                                            activeItem === 'Request' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('Request')}>Request<Image src='/Request.svg' width={listItemSize} height={listItemSize} /></li>
                                    <li
                                        className={
                                            activeItem === 'Active' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('Active')}>Active<Image src='/Active.svg' width={listItemSize} height={listItemSize} /></li>
                                    <li
                                        className={
                                            activeItem === 'In-Active' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('In-Active')}>In-Active<Image src='/In-Active.svg' width={listItemSize} height={listItemSize} /></li>
                                </ul>
                            )}
                        </div>

                        <h4>Candidates <Image src='/dropdown.svg' width={15} height={15} onClick={handleDropDownCandidatesToggle} /></h4>
                        {isDropDownCandidatesToggle && (
                            <ul>
                                <li
                                    className={
                                        activeItem === 'All' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('All')}

                                >All<Image src='/All.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'Recommended' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('Recommended')}
                                >Recommended<Image src='/recommended.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'Qualified' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('Qualified')}
                                >Qualified<Image src='/Like.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'NotEligible' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('NotEligible')}
                                >Not Eligible<Image src='/Close.svg' width={listItemSize} height={listItemSize} /></li>
                            </ul>
                        )}
                    </div>
                </div>

                <div className={styles.profileTab}>
                    <Image src='/dp.svg' height={38} width={38} className={styles.profileImage}/>
                    <div className={styles.textContent}>
                        <span>Hello</span>
                        <h4>Bruce Wayne</h4>
                    </div>
                    <Image src='/rightArrow.svg' width={listItemSize} height={listItemSize} />
                </div>
            </div>
        </>
    )
}

export default AdminSideNavbar;