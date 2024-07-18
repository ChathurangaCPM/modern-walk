"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/product/ProductCard";
import { CategoryInterface } from "../../types/types"
import { renderLoading } from "@/app/util/common";
import NotFoundProducts from "@/app/components/NotFoundProducts";

const CategoryProducts: React.FC<CategoryInterface> = ({ params }) => {
    const [products, setProducts] = useState<[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // re format URL param name for API request and display
    const reFormatCategory = (category: string) => {
        switch (category) {
            case "mens-clothing":
                return "men's clothing"
            case "womens-clothing":
                return "women's clothing"
            default:
                return category
        }
    }

    // fetch category related products
    const getCategoryProducts = async (category: string) => {
        const getCatName = reFormatCategory(category);

        try {
            setIsLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/category/${getCatName}`);

            
            if (response && response.status === 200) {
                const data = await response.json();
                setProducts(data || []);
                setIsLoading(false);
            } else {
                setProducts([]);
            }
        } catch (error) {
            setIsLoading(false);
            throw new Error("error getting category products")
        }
    }

    useEffect(() => {
        if (params && params?.slug) {
            getCategoryProducts(params?.slug)
        }
    }, [])


    return (
        <div>
            <div className="space-y-10 mt-5 p-5">
                <h3 className="font-semibold text-xl capitalize">{reFormatCategory(params?.slug || '')}</h3>

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
            </div>
        </div>
    )
}

export default CategoryProducts