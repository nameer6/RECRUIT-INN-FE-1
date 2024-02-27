import { useState } from 'react';
import styles from './PaymentOverlay.module.css';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SuccessIndicator from './SuccessIndicator';
import React from 'react';
import ErrorIndicator from './ErrorIndicator';
import { checkout } from '@/util/Checkout';


const PaymentOverlay = React.memo(({ showError, showErrorMessage , showOverlay1, onClose , showSuccessMessage, message , setMessage , showSuccess }) => {
    showErrorMessage
    const overlayRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        if (showOverlay1) {
            gsap.to(overlayRef.current, {
                y: '0%',
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        else {
            gsap.to(overlayRef.current, {
                y: '100%',
                opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: onClose
            });
        }

        return (() => {
            gsap.to(overlayRef.current,
                { y: '100%', opacity: 0, duration: 0.1, ease: 'power1' }
            );
        });
    }, [showOverlay1])


    return (
        <>
            <div ref={overlayRef} className={styles.parent}>
                {showErrorMessage && <ErrorIndicator showErrorMessage={showErrorMessage} msgText={message} />}
                {showSuccessMessage && <SuccessIndicator showSuccessMessage={showSuccessMessage} msgText={message} />}
                <div className={styles.btn}>
                    <button onClick={onClose}>
                        <Image src='/shut.svg' width={15} height={15} />
                    </button>
                </div>

                <div className={styles.superContainer}>
                    {isLoading ? (
                        <div className={styles.loader}></div>
                    ) : (
                        <div>
        <div className={styles.center}>
            <h1>Packages</h1>
            <p>Our flexible pricing options are tailored to your needs</p>
            <div class={styles.pricing_container} style={{margin: '0px' }}>
            <div className={styles.pricing_switcher} style={{margin: '0px' }}>
            <p className={styles.fieldset} style={{margin: '0px' }}>
                <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked />
                <label for="monthly-1">Monthly</label>
                <input type="radio" name="duration-1" value="yearly" id="yearly-1" />
                <label for="yearly-1">Yearly</label>
                <span className={styles.switch}></span>
            </p>
            </div>
            </div>
        </div>
        <div>
            <div className={styles.pricing_section}>
                
        <div className={styles.pricing_column}>
        <h2>Free</h2>
        <p>Everything you need to supercharge your productivity.</p>
        <p className={styles.price}>$0  <span className={styles.time}>/month</span></p>
        <hr />
        <p style={{color: "lightgray"}}>What’s included</p>
        <div className={styles.tick_list}>
            <div className={styles.tick_item}>Your first item goes here.</div>
            <div className={styles.tick_item}>Your second item goes here.</div>
            
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
        </div>
        <button className={styles.FreepricingButton}>Selected Package</button>
        </div>

        <div className={styles.pricing_column}>
        <h2>Standard</h2>
        <p>Everything you need to supercharge your productivity.</p>
        <p className={styles.price}>$19 <span className={styles.time}>/month</span></p>
        <hr />
        <p style={{color: "lightgray"}}>What’s included</p>
        <div className={styles.tick_list}>
            <div className={styles.tick_item}>Your first item goes here.</div>
            <div className={styles.tick_item}>Your second item goes here.</div>
            
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
        </div>
        <button className={styles.FreepricingButton}
        onClick={(()=>{
            checkout(
            {
                lineItems:[{price: "price_1OhvfyCtLGKA7fQG61J3932Q",quantity:1}]
            }
            )
            })}
        >Selected Package</button>
        </div>

        <div className={styles.pricing_column1}>
        <h2>Pro</h2>
        <p>Everything you need to supercharge your productivity.</p>
        <p className={styles.price}>$39 <span className={styles.time}>/month </span></p>
        <hr />
        <p style={{color: "lightgray"}}>What’s included</p>
        <div className={styles.tick_list}>
            <div className={styles.tick_item}>Your first item goes here.</div>
            <div className={styles.tick_item}>Your second item goes here.</div>
            
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
        </div>
        <button className={styles.FreepricingButton}
        onClick={(()=>{
            checkout(
            {
                lineItems:[{price: "price_1OhvfyCtLGKA7fQG61J3932Q",quantity:1}]
            }
            )
            })}
        >Selected Package</button>
        </div>

        <div className={styles.pricing_column1}>
        <h2>Enterprise</h2>
        <p>Everything you need to supercharge your productivity.</p>
        <p className={styles.price}>Contact us</p>
        <hr />
        <p style={{color: "lightgray"}}>What’s included</p>
        <div className={styles.tick_list}>
            <div className={styles.tick_item}>Your first item goes here.</div>
            <div className={styles.tick_item}>Your second item goes here.</div>
            
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
            <div className={styles.tick_item1}>Your second item goes here.</div>
        </div>
        <button className={styles.FreepricingButton}>Selected Package</button>
        </div>
        </div>
            </div> 
     </div>
        )}
        </div>
    </div>
        </>
    )
})

export default PaymentOverlay; 