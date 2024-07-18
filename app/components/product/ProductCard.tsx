import { ProductCardInterface } from "@/app/types/types";
import { formatPrice } from "@/app/util/common";
import Image from "next/image";

const ProductCard: React.FC<ProductCardInterface> = ({
    title,
    image,
    price,
    description,
    category
}) => {
    
    return (
        <div className="rounded-3xl bg-white shadow-custom transition-all ease-in-out hover:scale-105">
            <h3 className="font-semibold p-3 text-center line-clamp-1 h-[30px] overflow-hidden mb-5">{title}</h3>
            <div className="overflow-hidden pb-3 w-full h-[250px] relative mb-5">
                {/* in here set a dummy image if main image empty */}
                <Image src={image || 'https://dummyimage.com/800x600/ddd/fff'} alt={title || ''} width={400} height={400} className="w-full h-full left-0 top-0 absolute object-contain" />
            </div>

            {/* Card button details */}
            <div className={`p-5 text-center ${category === "women's clothing" ? "bg-[#ff5e84]" : "bg-[#2cd9af]"} rounded-3xl`}>
                
                <div className="font-semibold text-[18px] text-blue-600 mb-2">Rs: {formatPrice(price)}</div>

                <div className="min-h-[70px]">
                    <p className="text-xs line-clamp-4">
                        {description}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ProductCard;