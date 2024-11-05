// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const hostname = req.headers.get('host');
  const subdomain = hostname?.split('.')[0];

  if (subdomain && subdomain !== 'www') {
    req.headers.set('x-tenant-id', subdomain);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};