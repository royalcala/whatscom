import Image from "next/image";
import Link from "next/link";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
const exampleData = {
  "categories": [
    {
      "name": "Electronics",
      "products": [
        {
          "id": 1,
          "name": "Smartphone",
          "price": 699.99,
          "image": "/products/smartphone.jpg"
        },
        {
          "id": 2,
          "name": "Laptop",
          "price": 999.99,
          "image": "/products/laptop.jpg"
        }
      ]
    },
    {
      "name": "Clothing",
      "products": [
        {
          "id": 3,
          "name": "T-Shirt",
          "price": 19.99,
          "image": "/products/tshirt.jpg"
        },
        {
          "id": 4,
          "name": "Jeans",
          "price": 49.99,
          "image": "/products/jeans.jpg"
        }
      ]
    },
    {
      "name": "Home Appliances",
      "products": [
        {
          "id": 5,
          "name": "Vacuum Cleaner",
          "price": 199.99,
          "image": "/products/vacuum.jpg"
        },
        {
          "id": 6,
          "name": "Microwave",
          "price": 89.99,
          "image": "/products/microwave.jpg"
        }
      ]
    }
  ]
};

export async function generateStaticParams() {
  // const filePath = path.join(process.cwd(), 'public', 'products.json');
  // const jsonData = fs.readFileSync(filePath, 'utf-8');
  // const data = JSON.parse(jsonData);

  return {
        categories: [1,2,3]
    };
}

interface Category {
  name: string;
  products: {
    id: number;
    name: string;
    price: number;
    image: string;
  }[];
}

interface HomeProps {
  categories: Category[];
}

export default async function Home() {

  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "/logo.svg";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src={logoUrl} alt="Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-gray-700">what<span className="text-3xl">$</span>com</h1>
          </div>
        </Link>
        <nav className="flex gap-4">
          {exampleData.categories.map((category) => (
            <a key={category.name} href={`#${category.name}`} className="text-gray-700 hover:text-gray-900">
              {category.name}
            </a>
          ))}
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8 bg-gray-100">
        {exampleData.categories.map((category) => (
          <section key={category.name} id={category.name} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.products.map((product) => (
                <div key={product.id} className="bg-white border p-4 rounded-lg shadow-sm">
                  <Image src={product.image} alt={product.name} width={200} height={200} className="w-full h-auto" />
                  <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center">
        <p className="text-gray-700">&copy; 2023 whatScom. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
        </div>
      </footer>

      {/* Custom Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </div>
  );
}