// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host');
  let tenantId;

  // Check if the hostname contains a subdomain or custom domain for tenant ID
  if (hostname && hostname !== 'www.yourdomain.com') {
    tenantId = hostname.split('.')[0]; // Example: tenant1.yourdomain.com
  } else {
    // Fallback to path-based approach if tenantId is in the path
    const pathname = req.nextUrl.pathname;
    const match = pathname.match(/^\/([^/]+)\//); // Match /[tenantId]/...
    tenantId = match ? match[1] : null;
  }

  if (tenantId) {
    req.headers.set('x-tenant-id', tenantId);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
