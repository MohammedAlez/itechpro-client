'use client'

import ProductCard from "@/components/Global/ProductCard";
import { useEffect, useState } from "react";


const categories = ["Laptops", "PC Components", "Accessories", ];

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("Laptops");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load products from JSON file
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Filter products based on the selected category
  const filteredProducts = products.filter(
    (product) => product.category?.name === selectedCategory
  );

  if (isLoading) {
    return (
      <div className="py-10 px-4 max-w-6xl mx-auto text-center">
        Loading products...
      </div>
    );
  }

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto">
      {/* Categories Header */}
      <div className="flex justify-center space-x-3 overflow-x-auto overflow-y-hidden mb-10 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative py-2 font-medium whitespace-nowrap 
              transition-all duration-300
              before:transition-[bottom,opacity] before:duration-300 before:ease-in-out
              before:absolute before:min-w-[80%] before:h-1 before:rounded-lg 
              before:left-1/2 before:-translate-x-1/2 before:-bottom-4 before:opacity-0
              ${
                selectedCategory === category
                  ? "text-primary before:bg-primary before:bottom-0 before:opacity-100"
                  : "text-gray-500"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[80vh]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="h-fit" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
}