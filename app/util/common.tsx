import { Skeleton } from "@/components/ui/skeleton";

export const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US').format(price);
}

export const renderLoading = (max:number = 8) => {
    const items = [];

    for (let index = 0; index < max; index++) {
      items.push(
        <div key={index.toString()} className="bg-[rgba(0,0,0,0.01)] p-3 rounded-3xl">
          <Skeleton className="w-full h-5 mb-3" />
          <Skeleton className="w-full h-[150px] mb-3" />
          <Skeleton className="w-full h-[80px] rounded-3xl" />
        </div>
      )
    }

    return items;
  }