import { NextResponse, type NextRequest } from "next/server";

/**
 * Spam pages injected when the old WordPress site was hacked. They must never
 * redirect anywhere — answer 410 Gone so Google drops them from the index.
 * Paths are matched without a trailing slash (Next.js strips it first).
 */
const GONE_PATHS = new Set([
  "/9-better-casinos-on-the-internet-for-real-currency",
  "/9-better-casinos-on-the-internet-for-real-currency/feed",
  "/you-can-find-escorts-off-bridgetown-hookers-away-2",
  "/you-can-find-escorts-off-bridgetown-hookers-away-2/feed",
  "/pay-by-mobile-slots",
  "/pay-by-mobile-slots/feed",
]);

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname.replace(/\/+$/, "");
  if (GONE_PATHS.has(path)) {
    return new NextResponse("410 Gone", {
      status: 410,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "X-Robots-Tag": "noindex",
      },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/9-better-casinos-on-the-internet-for-real-currency/:path*",
    "/you-can-find-escorts-off-bridgetown-hookers-away-2/:path*",
    "/pay-by-mobile-slots/:path*",
  ],
};
