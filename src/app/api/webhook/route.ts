import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { db, ordersTable } from "../../../../sanity/lib/drizzle";

import { and, eq } from "drizzle-orm";

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
      // console.log("session :>> ", session);
      const {
        id,
        amount_subtotal,
        amount_total,
        created,
        currency,
        customer,
        status,
        customer_details,
        shipping_cost,
      } = session;
      const { name, email, phone } = customer_details;
      const { amount_total: shipping_amount_total } = shipping_cost;

      const res = await db
        .insert(ordersTable)
        .values({
          id,
          amount_subtotal,
          amount_total,
          created,
          currency,
          customer,
          status,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
          shipping_amount_total,
        })
        .returning();

      // console.log("data inserted into table", res);

      return NextResponse.json({ res });
    } else {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  } catch (err: any) {
    console.log("Error in webhook----------", err);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
}
