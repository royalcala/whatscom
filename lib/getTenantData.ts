// lib/getTenants.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getTenants() {
  try {
    // Assuming a Tenant model exists in your Prisma schema
    const tenants = await prisma.tenant.findMany({
      select: { id: true }, // Select only the fields you need, like the tenant ID
    });
    return tenants;
  } catch (error) {
    console.error("Error fetching tenants:", error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export async function getTenantCatalogs(tenantID) {
  return await prisma.catalog.findMany({
    where: { tenantId: tenantID },
  });
}

export async function getTenantCatalogs(tenantID) {
  return await prisma.catalog.findMany({
    where: { tenantId: tenantID },
  });
}

export async function getCatalogProducts(catalogId) {
  return await prisma.product.findMany({
    where: { catalogId: catalogId },
  });
}
