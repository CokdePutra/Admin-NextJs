import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token"); // Ambil token dari cookie
    const { pathname } = req.nextUrl;

    if (!token && pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/signin", req.url)); // Redirect ke login jika belum login
    }

    return NextResponse.next(); // Lanjutkan request
}
