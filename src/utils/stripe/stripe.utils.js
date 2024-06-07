import { loadStripe } from "src/utils/stripe/stripe.utils";

export const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_PUBLISHABALE_KEY,
);
