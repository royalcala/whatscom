// app/[tenantId]/catalogs/page.js
import { getTenantCatalogs } from '../../../lib/getTenantData';

export default async function CatalogPage({ params }) {
  const { tenantId } = params;
  const catalogs = await getTenantCatalogs(tenantId);

  return (
    <div>
      <h1>Catalogs for Tenant {tenantId}</h1>
      <ul>
        {catalogs.map((catalog) => (
          <li key={catalog.id}>{catalog.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const revalidate = 60; // Enable ISR for catalog pages
