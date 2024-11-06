// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create Tenant One with a catalog and products
  const tenantOne = await prisma.tenant.create({
    data: {
      name: 'Tenant One',
      catalogs: {
        create: {
          name: 'Electronics',
          products: {
            create: [
              { name: 'Laptop', price: 999.99, description: 'A powerful laptop.' },
              { name: 'Smartphone', price: 699.99, description: 'A sleek smartphone.' },
            ],
          },
        },
      },
    },
  });

  // Create Tenant Two with a catalog and products
  const tenantTwo = await prisma.tenant.create({
    data: {
      name: 'Tenant Two',
      catalogs: {
        create: {
          name: 'Books',
          products: {
            create: [
              { name: 'JavaScript Guide', price: 29.99, description: 'Learn JavaScript from scratch.' },
              { name: 'Prisma Handbook', price: 19.99, description: 'Master Prisma ORM.' },
            ],
          },
        },
      },
    },
  });

  console.log('Seeded tenants:', { tenantOne, tenantTwo });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
