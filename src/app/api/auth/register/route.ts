import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
import bcrypt from 'bcryptjs';

// Handle POST request for registration
export async function POST(request: Request) {
  const { name, email, password } = await request.json();

  // Check if the user already exists
  const existingUser = await query('SELECT * FROM users WHERE email = ?', [email]);

  if (existingUser.length > 0) {
    return NextResponse.json({ success: false, error: 'User already exists' });
  }

  // Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the new user to the database
  try {
    await query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [
      name,
      email,
      hashedPassword,
    ]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
