// HeroBanner.tsx
const HeroBanner = () => {
    return (
      <section className="bg-blue-500 text-white p-8 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Special Deal: 50% Off on All Products!</h2>
          <p className="mt-2 text-xl">Limited time offer. Grab your favorites before they're gone!</p>
          <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-600">
            Shop Now
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroBanner;
  
