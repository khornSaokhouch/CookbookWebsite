// src/app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Handle POST request for login
export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Find the user by email
  const user = await query('SELECT * FROM users WHERE email = ?', [email]);

  if (user.length === 0) {
    return NextResponse.json({ success: false, error: 'User not found' });
  }

  // Compare the entered password with the stored hashed password
  const passwordIsValid = await bcrypt.compare(password, user[0].password);

  if (!passwordIsValid) {
    return NextResponse.json({ success: false, error: 'Invalid password' });
  }

  // Generate a JWT token for the authenticated user
  const token = jwt.sign({ userId: user[0].id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return NextResponse.json({ success: true, token });
}
