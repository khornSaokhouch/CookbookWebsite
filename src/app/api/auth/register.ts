import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/lib/auth";
import { db } from "@/lib/db"; // Assuming you have a `db.ts` for database queries

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();

  // Check if the user already exists
  const [existingUser] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Hash the password before storing it
  const hashedPassword = await hashPassword(password);

  // Save the new user to the database
  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashedPassword]
  );

  return NextResponse.json({ success: true, user: { name, email } });
}
