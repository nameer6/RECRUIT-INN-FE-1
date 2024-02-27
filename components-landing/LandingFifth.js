import { useEffect } from 'react';
import React from 'react';
import styles from "./LandingFifth.module.css";
import Image from 'next/image';
// import './landingGlobal.css';
// import './styles.css';
import style from "./styles.module.css";


const LandingFifth = () => {
  useEffect(() => {
    import('../public/scripts/bramusScript').then(({ showDialog }) => {
      showDialog('https://scroll-driven-animations.style/demos/stacking-cards/css/');
    });
  }, []);

  return (
    <main className={styles.main}>
      <ul id={styles.cards}>
        <li className={`${styles.card}`} id={styles.card_1}>
          <figure className=''>
            <Image src='/Image.png' width={1200} height={600} />
          </figure>
        </li>
        <li className={styles.card} id={styles.card_2} >
          <figure className=''>
            <Image src='/Image.png' width={1200} height={600} />
          </figure>
        </li>
        <li className={styles.card} id={styles.card_3}>
          <figure>
            <Image src='/Image.png' width={1200} height={600} />
          </figure>
        </li>
        {/* Repeat the above structure for other cards */}
      </ul>
    </main>
  );
};

export default LandingFifth;