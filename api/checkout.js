const stripe = require("stripe")(process.env.STRIPE_TEST_SK);
const hostUrl = "https://nuxt-stripe-amber.vercel.app";

export default async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [req.body.order],
    success_url: `${hostUrl}/${req.body.slug}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${hostUrl}/${req.body.slug}?failed=true`
  });

  return res.status(200).json(session);
};
