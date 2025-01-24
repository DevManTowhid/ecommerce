import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation.",
      price: "$199",
      image: "/headphones.jpg",
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Latest model with an advanced camera and sleek design.",
      price: "$999",
      image: "/smartphone.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      description: "Powerful laptop with great performance and portability.",
      price: "$1,499",
      image: "/laptop.jpg",
    },
    {
      id: 4,
      name: "Smart Watch",
      description: "Track your fitness goals and stay connected on the go.",
      price: "$249",
      image: "/smartwatch.jpg",
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className="rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-600 text-sm text-center mt-2">
              {product.description}
            </p>
            <span className="text-lg font-bold text-green-600 mt-4">
              {product.price}
            </span>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
