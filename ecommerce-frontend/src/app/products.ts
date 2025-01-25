export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    available: boolean; // New property to indicate product availability
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds",
      description: "High-quality sound with noise cancellation and long battery life.",
      price: 79.99,
      image: "/images/earbuds.jpg",
      category: "Electronics",
      available: true,
    },
    {
      id: 2,
      name: "Smartwatch Fitness Tracker",
      description: "Track your heart rate, steps, and sleep with this sleek smartwatch.",
      price: 129.99,
      image: "/images/smartwatch.jpg",
      category: "Wearables",
      available: false, // Out of stock
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      description: "Comfortable and eco-friendly t-shirt made from 100% organic cotton.",
      price: 29.99,
      image: "/images/tshirt.jpg",
      category: "Apparel",
      available: true,
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      description: "Keep your drinks hot or cold for hours with this durable water bottle.",
      price: 24.99,
      image: "/images/water-bottle.jpg",
      category: "Accessories",
      available: true,
    },
    {
      id: 5,
      name: "Wireless Charging Pad",
      description: "Charge your devices quickly and conveniently with this wireless pad.",
      price: 49.99,
      image: "/images/charging-pad.jpg",
      category: "Electronics",
      available: true,
    },
    {
      id: 6,
      name: "Leather Laptop Bag",
      description: "Stylish and functional laptop bag made from genuine leather.",
      price: 89.99,
      image: "/images/laptop-bag.jpg",
      category: "Accessories",
      available: false, // Out of stock
    },
  ];