import { useState } from 'react';
import styles from '../components/SideNavbar.module.css'
import Image from 'next/image';
import { useActiveItem } from '../src/contexts/ActiveItemContext';


const SideNavbar = ({ navbarIte , showOverlay1 , setShowOverlay1 }) => {
    const[showupgrade , setshowupgrade] = useState(false);
    const { activeItem, setActiveItem } = useActiveItem();
    const [clickedItem, setClickedItem] = useState('');

    const [isDropDownJobsToggle, setIsDropDownJobsToggle] = useState(false);
    const [isDropDownCandidatesToggle, setIsDropDownJobsCandidatesToggle] = useState(false);

    const upgradeHandler = () =>{
        setshowupgrade(!showupgrade)
    }
    const openAddJobHandler = () => {
        setShowOverlay1(true);
        console.log("clicking button");
    }

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

    const listItemSize = 25;
    const logoSize = 30

    return (
        <>
            <div className={styles.masterContainer}>
                <div className={styles.mainContainer}>
                    <div className={styles.logoContainer}>
                        <h3><Image src="/logo.svg" width={logoSize} height={logoSize} />recruitinn.ai</h3>
                    </div>

                    <div className={activeItem === 'Dashboard' ? `${styles.dashboardButton} ${styles.active}` : `${styles.dash}`}
                        onClick={() => handleItemClick('Dashboard')}>
                        Dashboard
                        <Image src='/Feed.svg' width={listItemSize} height={listItemSize} />
                    </div>

                    <div className={styles.listContainer}>
                        <div className={styles.list}>
                            <h4>Jobs <Image src='/dropdown.svg' width={15} height={15} onClick={handleDropDownJobsToggle} /></h4>
                            {isDropDownJobsToggle && (
                                <ul>
                                    <li
                                        className={
                                            activeItem === 'AllJobs' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('AllJobs')}>All <Image src='/Apps.svg' width={listItemSize} height={listItemSize} /></li>
                                    <li
                                        className={
                                            activeItem === 'Active' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('Active')}>Active<Image src='/CheckAlt.svg' width={listItemSize} height={listItemSize} /></li>
                                    <li
                                        className={
                                            activeItem === 'Closed' ?
                                                `${styles.dashboardButton} ${styles.active}`
                                                : ''
                                        }
                                        onClick={() => handleItemClick('Closed')}>Closed<Image src='/Restrict.svg' width={listItemSize} height={listItemSize} /></li>
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

                                >All<Image src='/Globe.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'Recommended' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('Recommended')}
                                >Recommended<Image src='/Bolt.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'Qualified' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('Qualified')}
                                >Qualified<Image src='/Star.svg' width={listItemSize} height={listItemSize} /></li>
                                <li
                                    className={
                                        activeItem === 'NotEligible' ?
                                            `${styles.dashboardButton} ${styles.active}`
                                            : ''
                                    }
                                    onClick={() => handleItemClick('NotEligible')}
                                >Not Eligible<Image src='/Warning.svg' width={listItemSize} height={listItemSize} /></li>
                            </ul>
                        )}
                    </div>
                </div>,

                {showupgrade && 
                <div className={styles.btndiv}>
                    <button className={styles.btn} onClick={openAddJobHandler}>
                    Upgrade <Image src="/Bolt.png" alt="Upgrade" width="24" height="24"/>
                    </button>
                </div>}

                <div className={styles.profileTab} onClick={upgradeHandler}>
                    <Image src='/dp.svg' height={50} width={50} className='profileImage' />
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

export default SideNavbar;