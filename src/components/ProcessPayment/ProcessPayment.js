import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardForm from "./SimplecardForm";
// import SplitCardForm from "./SplitCardForm.js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51J0ovqIZEw6B0UOPSoDEcxwz5WbCYWM9RLadewsS0KXBeRxoi5GTM51ZETG6PoaLCojuP8grPZ3j8LgtAXOAcMOP00kJjn4z2e"
);
const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm handlePayment={handlePayment} />
      {/* <SplitCardForm /> */}
    </Elements>
  );
};

export default ProcessPayment;
