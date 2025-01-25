import Link from 'next/link';

export default function LaunchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center text-white">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our E-commerce Store</h1>
        <p className="text-xl">Discover the latest trends and shop your favorite products.</p>
      </header>

      {/* Call to Action */}
      <div className="flex flex-col items-center space-y-4">
        <Link href="/shop">
          <a className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition duration-300">
            Shop Now
          </a>
        </Link>
        <Link href="/about">
          <a className="text-white hover:underline">Learn More About Us</a>
        </Link>
      </div>

      {/* Featured Products Section */}
      <section className="mt-16 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-purple-600">
            <h3 className="text-xl font-bold mb-2">Product 1</h3>
            <p className="mb-4">Description of product 1.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-purple-600">
            <h3 className="text-xl font-bold mb-2">Product 2</h3>
            <p className="mb-4">Description of product 2.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Add to Cart
            </button>
          </div>

          {/* Product Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-purple-600">
            <h3 className="text-xl font-bold mb-2">Product 3</h3>
            <p className="mb-4">Description of product 3.</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-sm">&copy; 2023 Your E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}