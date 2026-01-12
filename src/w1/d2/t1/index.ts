// 1. 型定義：InventoryItem id(string),name(string),stock(number),minRequired(number),category(string)
// 2. 関数 getShortageReport(items: InventoryItem[]): string[] を作成。
//     - 在庫不足の商品だけを抽出する。（`stock < minRequired` のもの）
//     - 不足している数（`minRequired - stock`）が多い順に並べる。
//     - 出力形式：`["[カテゴリ] 商品名: あと〇〇個不足しています", ...]`

// 【ここがポイント！】
// 今回は「計算結果（不足数）」を元にソートし、さらにその計算結果を出力メッセージでも使います。
// 何度も計算しなくて済むように、`map` で「計算済みのオブジェクト」を一度作ってからソートする方法に挑戦してみましょう。

type InventoryItem = {
  id: string;
  name: string;
  stock: number;
  minRequired: number;
  category: string;
};

const getShortageReport = (items: InventoryItem[]): string[] => {
  return items
    .map((item) => {
      const shortage = item.minRequired - item.stock;
      return { ...item, shortage };
    })
    .filter((item) => Boolean(item.shortage))
    .sort((a, b) => b.shortage - a.shortage)
    .map(
      (item) =>
        `[${item.category}]${item.name}: あと${item.shortage}個不足しています`
    );
};

const inventoryItems = [
  {
    id: "1",
    name: "商品1",
    stock: 10,
    minRequired: 20,
    category: "カテゴリ1",
  },
  {
    id: "2",
    name: "商品2",
    stock: 5,
    minRequired: 15,
    category: "カテゴリ2",
  },
  {
    id: "3",
    name: "商品3",
    stock: 25,
    minRequired: 30,
    category: "カテゴリ3",
  },
  {
    id: "4",
    name: "商品4",
    stock: 20,
    minRequired: 10,
    category: "カテゴリ4",
  }, {
    id: "5",
    name: "商品5",
    stock: 10,
    minRequired: 10,
    category: "カテゴリ5",
  },
]

console.log(getShortageReport(inventoryItems));

export { }