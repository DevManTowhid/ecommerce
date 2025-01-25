"use client"; // Required for using React hooks in Next.js

import { useState, useEffect } from 'react';
import { products } from './products';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ProductPage() {
  // State to manage the cart
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to handle adding a product to the cart
  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, increase its quantity
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCart((prevCart) => [
        ...prevCart,
        { id: product.id, name: product.name, price: product.price, quantity: 1 },
      ]);
    }
  };

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
              <button
                onClick={() =>
                  handleAddToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                  })
                }
                className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition duration-300"
              >
                Add to Cart
              </button>
            ) : (
              <p className="mt-4 text-red-600 font-semibold">Sold Out</p>
            )}
          </div>
        ))}
      </div>

      {/* Display Cart */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-2">
                <span className="font-semibold">{item.name}</span> - $
                {item.price.toFixed(2)} (Quantity: {item.quantity})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}