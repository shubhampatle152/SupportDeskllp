
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Clear the session cookie
    cookies().delete('admin-session-token');
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    console.error("Logout API error:", error);
    return NextResponse.json({ message: "An internal server error occurred" }, { status: 500 });
  }
}
