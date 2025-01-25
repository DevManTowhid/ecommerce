const Navbar = () => {
    return (
      <nav className="w-full bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between">
          <div className="text-lg font-bold">E-Commerce</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Products</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  