// **【要件】**

// 1. 以下の型を持つオブジェクトの配列を作成してください。
//     - `id`: number
//     - `name`: string
//     - `price`: number
//     - `stock`: number
//     - `category`: 'electronics' | 'clothing' | 'food'
// 2. 以下の関数を実装してください。
//     - `getAvailableProducts(products, minPrice)`:
//         - 在庫(`stock`)が0より大きく、かつ指定した`minPrice`以上の商品を抽出して返す。
//         - 引数と戻り値に適切な型定義を行うこと。

type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    category: 'electronics' | 'clothing' | 'food';
}

const products: Product[] = [
    { id: 1, name: 'PC', price: 100000, stock: 5, category: 'electronics' },
    { id: 2, name: 'Tシャツ', price: 3000, stock: 0, category: 'clothing' },
    { id: 3, name: 'カレー', price: 500, stock: 10, category: 'food' },
]

const getAcailableProducts = (products: Product[], minProce: number): Product[] => {
    return products.filter(p => p.stock > 0 && p.price >= minProce)
}

console.log(getAcailableProducts(products, 1000));

// **【要件】**

// 3. `calculateTotal` の中で、もし商品リストが空（`items.length === 0`）の場合は、計算をせずに `"カートは空です"` という文字列を返すガード節（例外処理）を追加してください。
// 4. **「税込価格（1.1を掛ける）」の計算に `Math.floor()` を使って小数点以下を切り捨ててください。**
// 【制約】: reduce メソッドを使って合計を算出してみてください（調べながらでOK）。

const TAX_RATE: number = 1.1;

type CartItem = {
    id: number;
    quantity: number;
    price: number;
    isTaxFree: boolean;
}

const cartItems: CartItem[] = [
    { id: 1, quantity: 2, price: 100000, isTaxFree: false },
    { id: 2, quantity: 1, price: 3000, isTaxFree: true },
    { id: 3, quantity: 5, price: 500, isTaxFree: false },
]

const calculateTotal = (items: CartItem[]): number | string => {

    if (items.every(item => item.price < 0)) {
        return "価格は0以上の数値で入力してください";
    }

    if (items.length === 0) {
        return "カートは空です";
    }


    const total: number = cartItems.reduce((acc, item) => {
        if (item.isTaxFree) {
            return acc + item.price * item.quantity;
        } else {
            return acc + Math.floor(item.price * item.quantity * TAX_RATE);
        }
    }, 0);

    return total;
}

console.log(calculateTotal(cartItems));



function getDiscountedPrice(price: number, discountRate: number): number | string {
    if (discountRate < 0 || discountRate > 1) {
        return "割引率は0以上1以下で入力してください";
    }
    return price * (1 - discountRate);
}

// 1000円の30%オフなので 700 を期待
console.log(getDiscountedPrice(1000, 0.3));

export { };
