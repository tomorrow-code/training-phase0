// 1. 以下の型を持つ `Product` 配列を定義。
//     - `name(string)`, `price(number)`, `category(string)`
// 2. 関数 `getAveragePriceByCategory(products: Product[], category: string): number` を作成。
//     - 指定されたカテゴリーに一致する商品の **平均価格** を算出する。
//     - 該当する商品がない場合は `0` を返す。
//     - **小数点以下は四捨五入** してください（`Math.round` を使用）。

type Product = {
  name: string;
  price: number;
  category: string;
}

const products: Product[] = [
  { name: "Product 1", price: 100, category: "Category 1" },
  { name: "Product 2", price: 200, category: "Category 2" },
  { name: "Product 3", price: 300, category: "Category 3" },
  { name: "Product 4", price: 400, category: "Category 4" },
  { name: "Product 5", price: 500, category: "Category 5" },
];

const getAveragePriceByCategory = (products: Product[], category: string): number => {
  const filteredProducts: Product[] = products.filter(product => product.category === category);
  if (filteredProducts.length === 0) {
    return 0;
  }
  const totalPrice: number = filteredProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return Math.round(totalPrice / filteredProducts.length);
}


export { };