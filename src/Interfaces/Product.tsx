interface Product {
    id: number;
    title: string;
    image: any;
    price: number   ;
    quantity?: number;
    plateforme?: string;
    editor: string;
    developer: string;
    date: string;
    genre: string;
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
    directX: string;
    additionalNote: string;
    screen: string;
    promo?: string;
    year?: string;
}

export default Product;