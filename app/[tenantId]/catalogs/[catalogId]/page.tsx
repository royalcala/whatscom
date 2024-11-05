// app/[tenantId]/catalogs/[catalogId]/page.js
import { getCatalogProducts } from '../../../../lib/getTenantData';

export default async function CatalogProductsPage({ params }) {
  const { catalogId } = params;
  const products = await getCatalogProducts(catalogId);

  return (
    <div>
      <h1>Products in Catalog {catalogId}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const revalidate = 60; // Enable ISR for product pages
