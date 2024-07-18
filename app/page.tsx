"use client";

import ProductCard from "./components/product/ProductCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import { renderLoading } from "./util/common";
import NotFoundProducts from "./components/NotFoundProducts";

const Home: React.FC = () => {
  const [products, setProducts] = useState<[] | null>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products`);
      if (res && res.status === 200) {
        const data = await res.json();
        setProducts(data || []);
        setLoading(false);
      } else {
        setLoading(false);
        setProducts([]);
      }
    } catch (error) {
      setLoading(false);
      throw new Error("error getting products")
    }
  }

  // fetching data when initialize
  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <div className="space-y-10 mt-5 p-5">
      <h3 className="font-semibold text-xl">Flash Sale</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10">
        {isLoading ? renderLoading(8) : products && products.length > 0 && products.map((product: any) => (
          <ProductCard
            key={product?.id.toString()}
            image={product?.image}
            title={product?.title || ''}
            category={product?.category || ''}
            price={product?.price || 0}
            link=""
            description={product?.description || ''}
          />
        ))}
      </div>

      {/* show alert of products cant find */}
      {!isLoading && products?.length === 0 && <NotFoundProducts/>}

      {/* main category cards */}
      <h3 className="font-semibold text-xl">Categories</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-flow-col gap-10">
        <Link href="/category/mens-clothing" className="px-10 py-28 rounded-3xl bg-[#2cd9af] text-center font-bold text-4xl text-white shadow-custom transition-all ease-in-out hover:scale-105">
          <h2>Men's Clothing</h2>
        </Link>
        <Link href="/category/womens-clothing" className="px-10 py-28 rounded-3xl bg-[#ff5e84] text-center font-bold text-4xl text-white shadow-custom transition-all ease-in-out hover:scale-105">
          <h2>Women's Clothing</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;