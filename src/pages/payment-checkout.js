"use client";
import styles from "./payment-checkout.module.css";
import { checkout } from "@/util/Checkout";

export default function PaymentCheckout() {
  return (
    <div>
        <div className={styles.center}>
            <h1>Packages</h1>
            <p>Our flexible pricing options are tailored to your needs</p>
            <div class={styles.pricing_container}>
            <div className={styles.pricing_switcher}>
            <p className={styles.fieldset}>
                <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked />
                <label for="monthly-1">Monthly</label>
                <input type="radio" name="duration-1" value="yearly" id="yearly-1" />
                <label for="yearly-1">Yearly</label>
                <span className={styles.switch}></span>
            </p>
            </div>
            </div>
            <div className={styles.switch_wrapper}>
                <input id="monthly" type="radio" name="switch" checked />
                <input id="yearly" type="radio" name="switch" />
                <label for="monthly">Monthly</label>
                <label for="yearly">Yearly</label>
                <span className={styles.highlighter}></span>
            </div>
        </div >
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
  );
}
