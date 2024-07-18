export interface MainHeaderWrapperInterface {
    logo: string,
    title: string,
    link: string
}


export interface ProductCardInterface {
    image: string,
    title: string,
    category: string
    link: string
    price: number,
    description: string
}

export interface CategoryInterface {
    slug: string,
    title: string,
    params: any;
}