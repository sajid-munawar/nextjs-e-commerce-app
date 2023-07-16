import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  console.log("body :>> ", body);
};
