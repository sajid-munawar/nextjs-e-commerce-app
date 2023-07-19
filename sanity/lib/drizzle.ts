import {
  pgTable,
  varchar,
  integer,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

export const cartTable = pgTable("cart", {
  id: serial("id").primaryKey(),
  user_id: varchar("user_id", {
    length: 255,
  }).notNull(),
  product_id: varchar("product_id", {
    length: 255,
  }).notNull(),
  quantity: integer("quantity").notNull(),
});

export const ordersTable = pgTable("orders", {
  id: varchar("id", {
    length: 255,
  }).primaryKey(),
  amount_subtotal: integer("amount_subtotal").notNull(),
  amount_total: integer("amount_total").notNull(),
  created: varchar("created", {
    length: 255,
  }).notNull(),
  currency: varchar("currency", {
    length: 10,
  }).notNull(),
  customer: varchar("customer", {
    length: 255,
  }).notNull(),
  status: varchar("status", {
    length: 50,
  }).notNull(),
  customer_name: varchar("customer_name", {
    length: 255,
  }).notNull(),
  customer_email: varchar("customer_email", {
    length: 255,
  }),
  customer_phone: varchar("customer_phone", {
    length: 20,
  }),
  shipping_amount_total: integer("shipping_amount_total").notNull(),
});

export const db = drizzle(sql);
