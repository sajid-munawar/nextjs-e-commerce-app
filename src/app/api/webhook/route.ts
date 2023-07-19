import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(req: any, res: any) {
  try {
    const rawBody = await req.text();
    const sig = req.headers.get("stripe-signature") as string;
    const event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    if ("checkout.session.completed" === event.type) {
      const session: any = event.data.object;
      console.log("session :>> ", session);
      //Once you'll get data you can use it according to your
      //reqirement for making update in DB
      const {
        id,
        amount_subtotal,
        amount_total,
        created,
        currency,
        customer,
        status,
        customer_details: { name, email, phone },
        shipping_cost: { amount_total: shipping_amount_total },
      } = session;
    } else {
      res.setHeader("Allow", "POST");
      // res.status(405).end("Method Not Allowed");
    }
  } catch (err: any) {
    console.log("Error in webhook----------", err);
    // res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
}
