import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold text-xl">ShopName</h3>
            <p>&copy; 2025 ShopName. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            {/* Footer links */}
            <Link href="/about" className="hover:underline">About Us</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  