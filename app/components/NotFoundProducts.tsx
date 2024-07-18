import { PackageOpen } from "lucide-react"

const NotFoundProducts: React.FC<any> = () => {
    return (
         <div className="p-28 flex flex-col items-center justify-center">
            <PackageOpen className="w-40 h-40 text-muted-foreground mb-3" strokeWidth={0.2}/>
            <h4 className="text-xl text-muted-foreground">No products to show!</h4>
        </div>
    )
}

export default NotFoundProducts;