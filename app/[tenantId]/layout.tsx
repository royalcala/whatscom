// app/layout.js
import { TenantProvider } from '../context/TenantContext';
import { headers } from 'next/headers';

export default function RootLayout({ children }) {
  const tenantID = headers().get('x-tenant-id'); // Access tenant ID from the middleware

  return (
    <html lang="en">
      <body>
        <TenantProvider tenantID={tenantID}>
          {children}
        </TenantProvider>
      </body>
    </html>
  );
}
