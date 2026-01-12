// 1. 型定義：`Transaction`: `{ id: number, amount: number, date: string, category: string }`
// 2. 関数 `getCategoryReport(data: Transaction[], month: string): string[]` を作成。
//     - `date` は `"2025-01-15"` のような形式で入ってくると想定。
//     - 引数 `month`（例: `"01"`) と一致するデータのみ抽出。
//     - **カテゴリーごとに合計金額を算出**する。（※ここが最難関）
//     - 合計金額が高い順に並べる。
//     - 出力形式：`["food: 5000円", "electronics: 3000円"]`

// **【ヒント：カテゴリーごとの集計】**`reduce` を使って、オブジェクト（連想配列）を作るのが一般的です。

type Transaction = {
  id: number;
  amount: number;
  date: string;
  category: string;
};

const data: Transaction[] = [
  { id: 1, amount: 1000, date: "2025-01-15", category: "food" },
  { id: 2, amount: 2000, date: "2025-01-15", category: "electronics" },
  { id: 3, amount: 3000, date: "2025-02-15", category: "food" },
  { id: 4, amount: 4000, date: "2025-03-15", category: "electronics" },
  { id: 5, amount: 5000, date: "2025-03-15", category: "food" },
]
const getCategoryReport = (data: Transaction[], month: string): string[] => {
  const filteredData = data.filter((transaction) => transaction.date.slice(5, 7) === month);
  const getCategoryReport = filteredData.reduce((acc, data) => {
    acc[data.category] = (acc[data.category] || 0) + data.amount;
    return acc;
  }, {} as Record<string, number>);



  return Object.entries(getCategoryReport).sort((a, b) => b[1] - a[1]).map((data) => `${data[0]}: ${data[1]}円`);

}


console.log("01", getCategoryReport(data, "01"));
console.log("02", getCategoryReport(data, "02"));
console.log("03", getCategoryReport(data, "03"));

export { }