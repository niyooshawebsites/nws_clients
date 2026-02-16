// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export function middleware(req: NextRequest) {
  // ✅ App Router cookie access
  const token = req.cookies.get("token")?.value; // should exist
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next(); // allow request
  } catch (err) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Protect specific routes
export const config = {
  matcher: ["/dashboard/:path*"],
};
