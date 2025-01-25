import Link from 'next/link';  // Importing Link from Next.js for navigation
import { useState } from 'react';  // Importing useState to handle the search query state

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Brand Name, linked to home */}
      <Link href="/" className="text-xl font-bold">ShopName</Link>
      
      <div className="flex space-x-4">
        {/* Navigation link to categories */}
        <Link href="/categories" className="hover:underline">Categories</Link>
        
        {/* Search bar */}
        <input
          type="text"
          className="p-2 rounded"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on input change
        />
        
        {/* Cart icon with notification badge */}
        <Link href="/cart" className="relative">
          <span>🛒</span>
          {/* Badge displaying cart item count (0 for now) */}
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-1">0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

