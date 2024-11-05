// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Example: Create a tenant with catalogs and products
  const tenant = await prisma.tenant.create({
    data: {
      name: 'Tenant One',
      catalogs: {
        create: [
          {
            name: 'Electronics',
            products: {
              create: [
                { name: 'Laptop', price: 999.99, description: 'A powerful laptop.' },
                { name: 'Smartphone', price: 699.99, description: 'A sleek smartphone.' },
              ],
            },
          },
          {
            name: 'Books',
            products: {
              create: [
                { name: 'JavaScript Guide', price: 29.99, description: 'Learn JavaScript from scratch.' },
                { name: 'Prisma Handbook', price: 19.99, description: 'Master Prisma ORM.' },
              ],
            },
          },
        ],
      },
    },
  });

  console.log('Created tenant with catalogs and products:', tenant);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
