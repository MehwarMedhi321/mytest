import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { cart, total } = await req.json();

    if (!cart || cart.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("checkoutDB");

    const result = await db.collection("orders").insertOne({
      cart,
      total,
      status: "pending",
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      orderId: result.insertedId,
    });
  } catch (error) {
    console.error("Checkout API error:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
