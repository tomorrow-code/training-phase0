type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: 'electronics' | 'clothing' | 'food';
};

const products: Product[] = [
    { id: 1, name: 'PC', price: 100000, stock: 5, category: 'electronics' },
    { id: 2, name: 'Tシャツ', price: 3000, stock: 0, category: 'clothing' },
    { id: 3, name: 'カレー', price: 500, stock: 10, category: 'food' },
];

function getAvailableProducts(products: Product[], minPrice: number): Product[] {
    return products.filter(p => p.stock > 0 && p.price >= minPrice);
}

console.log(getAvailableProducts(products, 1000));