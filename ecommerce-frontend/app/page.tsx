import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500 text-white text-center">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to Our Platform!</h1>
      <p className="text-xl mb-8 max-w-lg">
        Your journey to discovering amazing products and exclusive deals starts here. Dive in and enjoy an unparalleled shopping experience.
      </p>
      <button
        className="px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
        onClick={() => alert("Let's explore our amazing collection!")}
      >
        Get Started
      </button>
    </div>
  );
}
