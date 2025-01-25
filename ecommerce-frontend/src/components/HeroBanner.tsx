const HeroBanner = () => {
    return (
      <section className="w-full bg-blue-500 text-white p-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg mb-8">Find the best products at unbeatable prices.</p>
          <button className="bg-white text-blue-500 px-6 py-2 font-semibold rounded hover:bg-gray-200">
            Shop Now
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;
  