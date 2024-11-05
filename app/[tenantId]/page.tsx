import { getTenants } from '../../lib/getTenantData';

export async function generateStaticParams() {
  const tenants = await getTenants();
  return tenants.map(tenant => ({ tenantId: tenant.id }));
}

export default function TenantPage({ params }) {
  const { tenantId } = params;
  return <div>Welcome, Tenant {tenantId}!</div>;
}

export const revalidate = 60; // Revalidate every 60 seconds
