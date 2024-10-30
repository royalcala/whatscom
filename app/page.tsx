import Image from "next/image";
import FloatingWhatsApp from "react-floating-whatsapp";

export default function Home() {
  const logoUrl = process.env.NEXT_PUBLIC_LOGO_URL || "/default-logo.svg";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image src={logoUrl} alt="Logo" width={40} height={40} />
          <h1 className="text-xl font-bold">WhatsCom</h1>
        </div>
        <nav className="flex gap-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Products</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-8 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Product Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Example Product Card */}
          <div className="bg-white border p-4 rounded-lg shadow-sm">
            <Image src="/product.jpg" alt="Product" width={200} height={200} className="w-full h-auto" />
            <h3 className="text-lg font-bold mt-2">Product Name</h3>
            <p className="text-gray-700">$99.99</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Buy Now</button>
          </div>
          {/* Repeat Product Cards */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md p-4 text-center">
        <p className="text-gray-700">&copy; 2023 WhatsCom. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Terms of Service</a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="+1234567890"
        accountName="WhatsCom Support"
        avatar="/logo.svg"
        statusMessage="Typically replies within 5 minutes"
        chatMessage="Hello! How can we help you today?"
        placeholder="Type a message..."
      />
    </div>
  );
}