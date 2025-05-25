'use client'

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "../Global/ProductCard";
import SectionTitle from "../Global/SectionTitle";

const featuredProducts: Product[] = [
  {
    id: 11,
    documentId: "gpu-1",
    name: "NVIDIA RTX 4090",
    description: "24GB GDDR6X flagship gaming GPU",
    price: 1600000,
    main_image: { url: "/images/products/gpu1.jpg" },
    images: [],
    category: {
      id: 1,
      name: "PC Components",
      image: { url: "/category-components.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 22,
    documentId: "laptop-2",
    name: "Razer Blade 15",
    description: "Premium 15.6\" gaming laptop",
    price: 2500000,
    main_image: { url: "/images/products/laptop2.jpg" },
    images: [],
    category: {
      id: 3,
      name: "Laptops",
      image: { url: "/category-laptops.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 13,
    documentId: "headset-1",
    name: "SteelSeries Arctis Nova Pro",
    description: "Wireless gaming headset with ANC",
    price: 350000,
    main_image: { url: "/images/products/headset1.jpg" },
    images: [],
    category: {
      id: 2,
      name: "Accessories",
      image: { url: "/category-accessories.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 17,
    documentId: "mousepad-1",
    name: "Corsair MM700",
    description: "RGB extended gaming mouse pad",
    price: 80000,
    main_image: { url: "/images/products/mousepad1.jpg" },
    images: [],
    category: {
      id: 2,
      name: "Accessories",
      image: { url: "/category-accessories.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 5,
    documentId: "mobo-1",
    name: "ASUS ROG Maximus Z790",
    description: "Premium Intel gaming motherboard",
    price: 500000,
    main_image: { url: "/images/products/mobo1.jpg" },
    images: [],
    category: {
      id: 1,
      name: "PC Components",
      image: { url: "/category-components.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 25,
    documentId: "laptop-5",
    name: "Lenovo Legion 7",
    description: "16\" QHD gaming laptop with RTX 3080",
    price: 2400000,
    main_image: { url: "/images/products/laptop5.jpg" },
    images: [],
    category: {
      id: 3,
      name: "Laptops",
      image: { url: "/category-laptops.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 19,
    documentId: "light-1",
    name: "Elgato Key Light Air",
    description: "Professional LED panel for streaming",
    price: 150000,
    main_image: { url: "/images/products/light1.jpg" },
    images: [],
    category: {
      id: 2,
      name: "Accessories",
      image: { url: "/category-accessories.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 8,
    documentId: "case-1",
    name: "Lian Li PC-O11 Dynamic",
    description: "Premium tempered glass gaming case",
    price: 150000,
    main_image: { url: "/images/products/case1.jpg" },
    images: [],
    category: {
      id: 1,
      name: "PC Components",
      image: { url: "/category-components.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 28,
    documentId: "laptop-8",
    name: "HP Omen 16",
    description: "16.1\" QHD gaming laptop",
    price: 1700000,
    main_image: { url: "/images/products/laptop8.jpg" },
    images: [],
    category: {
      id: 3,
      name: "Laptops",
      image: { url: "/category-laptops.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  },
  {
    id: 14,
    documentId: "monitor-1",
    name: "Samsung Odyssey G9",
    description: "49\" Dual QHD 240Hz curved gaming monitor",
    price: 1500000,
    main_image: { url: "/images/products/monitor1.jpg" },
    images: [],
    category: {
      id: 2,
      name: "Accessories",
      image: { url: "/category-accessories.jpg" },
      has_subcategories: false
    },
    sub_category: undefined,
    related_products: [],
    detailed_description: null
  }
];

export default function FeaturedProducts() {
    const { data, isFetching, isError } = useProducts({ type: 'featured_products' });
    const products: Product[] = data?.data || [];
    
    return (
        <div className="px-2 my-24 md:my-60 max-w-[1200px] mx-auto">
            <SectionTitle title="Featured " colored="PRODUCTS" subTitle="" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featuredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}