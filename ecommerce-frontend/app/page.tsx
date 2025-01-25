import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Our Store!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Discover a wide range of products crafted just for you. Dive in and explore what we have to offer!
      </p>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        onClick={() => alert("Explore our products coming soon!")}
      >
        Start Shopping
      </button>
    </div>
  );
}
