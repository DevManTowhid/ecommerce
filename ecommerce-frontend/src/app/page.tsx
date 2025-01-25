import { products } from './products';

export default function ProductPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-purple-600 font-bold">${product.price.toFixed(2)}</p>
            {product.available ? (
              <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300">
                Add to Cart
              </button>
            ) : (
              <p className="mt-4 text-red-600 font-semibold">Sold Out</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}