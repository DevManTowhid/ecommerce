// Define the Product type/interface to resolve the mismatch
interface Product {
  id: string; // The id should match the type used in your data (e.g., string)
  name: string;
  available: number;
  price: number;
  category: string;
  image: string;
  description: string;
}

// Assuming your `products` data is loaded or imported from somewhere
const products: Product[] = [
  // Example product objects with proper typing
  {
    id: "1",
    name: "Sample Product",
    available: 10,
    price: 99.99,
    category: "Electronics",
    image: "/sample.jpg",
    description: "This is a sample product."
  },
  // Add more product objects as needed
];

export default function Home() {
  // Your cart state (if necessary)
  const [cart, setCart] = useState<Product[]>([]);

  // Add to cart function
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, available: item.available - 1 } // Example logic to update
            : item
        );
      }
      return [...prevCart, product];
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}