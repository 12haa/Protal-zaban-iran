import { connectToMongoDB } from "@/dbConfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB();

export async function GET(request: NextRequest) {
  try {
    // Fetch all users from the "users" collection
    const users = await User.find({}).lean();

    // Return the fetched users as a JSON response
    return NextResponse.json(users, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
