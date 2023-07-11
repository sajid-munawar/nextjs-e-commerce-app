import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const uid = cookies().get("user_id")?.value;
  if (uid) {
    try {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, uid));
      return NextResponse.json({ res });
    } catch (error) {
      // console.log(error);
      return NextResponse.json({ res: ["Some wrong in GET request"] });
    }
  } else {
    return NextResponse.json({ res: ["no record found"] });
  }
};

// export const GET = async (request: NextRequest) => {
//   try {
//     const res = await db
//       .select()
//       .from(cartTable)
//       .where(eq(cartTable.user_id, "a3312389-e9cf-4da9-b4f6-c2a339c957e9"));
//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "Something went wrong" });
//   }
// };
export const POST = async (request: NextRequest) => {
  const req = await request.json();
  const user_id = cookies().get("user_id")?.value;

  if (!user_id) {
    const uid = uuid();
    cookies().set("user_id", uid);
  }

  try {
    const existingProduct = await db
      .select()
      .from(cartTable)
      .where(
        and(
          eq(cartTable.product_id, req.product_id),
          eq(cartTable.user_id, user_id!)
        )
      );

    if (existingProduct.length > 0) {
      console.log("Product already exists");
    } else {
      const res = await db
        .insert(cartTable)
        .values({
          product_id: req.product_id,
          quantity: req.quantity,
          user_id: cookies().get("user_id")?.value as string,
        })
        .returning();

      return NextResponse.json({ res });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
