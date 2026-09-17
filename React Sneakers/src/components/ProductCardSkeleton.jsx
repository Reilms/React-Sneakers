function ProductCardSkeleton() {
    return(
        <div className="flex flex-col gap-5">
            <div className="bg-gray-200 animate-pulse w-45 h-28 rounded-xl"></div>
            <div className="flex flex-col justify-start gap-1">
                <div className="bg-gray-200 animate-pulse w-45 h-5 rounded"></div>
                <div className="bg-gray-200 animate-pulse w-30 h-5 rounded"></div>
            </div>
            <div className="flex items-end justify-between w-45">
                <div className="bg-gray-200 animate-pulse w-23 h-7 rounded-lg"></div>
                <div className="bg-gray-200 animate-pulse w-10 h-10 rounded-lg"></div>
            </div>
        </div>
    )
}
export default ProductCardSkeleton