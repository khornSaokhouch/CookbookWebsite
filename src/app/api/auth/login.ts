import { NextRequest, NextResponse } from "next/server";
import { comparePasswords, generateToken } from "@/lib/auth";
import { db } from "@/lib/db"; // Assuming you have a `db.ts` for database queries

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // Find user by email
  const [user] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Check if password matches
  const isPasswordValid = await comparePasswords(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Generate JWT token
  const token = generateToken({ id: user.id, email: user.email });

  return NextResponse.json({ success: true, token });
}
