
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// IMPORTANT: This is a placeholder login.
// Replace with a secure authentication mechanism (e.g., NextAuth.js) for production.
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@example.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "password123";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const response = NextResponse.json({ message: "Login successful" }, { status: 200 });
      // Set a simple cookie for session management. Replace with secure session handling.
      cookies().set('admin-session-token', 'mock-admin-session-active', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24, // 1 day
        path: '/',
      });
      return response;
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ message: "An internal server error occurred" }, { status: 500 });
  }
}
