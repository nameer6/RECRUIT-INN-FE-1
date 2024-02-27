import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }) {
  try {
    let stripePromise = null;

    const getStripe = () => {
      if (!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
      }
      return stripePromise;
    };

   const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: window.location.origin,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error("Error during checkout:", error.message);
    // Handle the error, show a user-friendly message, or redirect to an error page
  }
}