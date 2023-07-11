import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "../../../../sanity/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
  const uid = cookies().get("user_id")?.value;
  // const req = request.nextUrl;
  // const uid = req.searchParams.get("user_id");
  // console.log(uid);
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
  const uid = uuid();
  const user_id = cookies().get("user_id")?.value;

  if (!user_id) {
    cookies().set("user_id", uid);
  }

  try {
    const res = await db
      .insert(cartTable)
      .values({
        product_id: req.product_id,
        quantity: req.quantity,
        user_id: cookies().get("user_id")?.value as string,
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};
