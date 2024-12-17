import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Secret key for JWT (set in .env.local)
const JWT_SECRET = process.env.JWT_SECRET || "your_default_secret";

// Hash a password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

// Compare a plain password with a hashed password
export async function comparePasswords(
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> {
  return await bcrypt.compare(plainPassword, hashedPassword);
}

// Generate a JSON Web Token
export function generateToken(payload: object): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

// Verify a JSON Web Token
export function verifyToken(token: string): object | null {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}
