// 1. 以下の型を定義。
//     - `User`: `id(number)`, `name(string)`, `score(number)`, `isActive(boolean)`
// 2. 関数 `getTopRankers(users: User[]): string[]` を作成。
//     - **`isActive` が `true`** のユーザーのみ。
//     - **スコアが高い順（降順）** にソート。
//     - **上位3名** だけを抽出。
//     - 戻り値は `"1位: 名前 (スコア点)"` という形式の文字列配列。

// **【ヒント】**

// - ソート：`array.sort((a, b) => b.score - a.score)`
// - 切り出し：`array.slice(0, 3)`

type User = {
  id: number;
  name: string;
  score: number;
  isActive: boolean;
}

const getTopRankers1 = (users: User[]): string[] => {
  return users.filter(user => user.isActive).sort((a, b) => b.score - a.score).slice(0, 3).map((user, index) => `${index + 1}位: ${user.name} (${user.score})`);
}

// 今回は必要ないが
// 元の配列を変更しない、toSorted()を使用
const getTopRankers2 = (users: User[]): string[] => {
  return users.filter(user => user.isActive).toSorted((a, b) => b.score - a.score).slice(0, 3).map((user, index) => `${index + 1}位: ${user.name} (${user.score})`);
}

// 今回は必要ないが
// 元の配列を変更しない、スプレッド演算子を使用
const getTopRankers3 = (users: User[]): string[] => {
  return [...users].filter(user => user.isActive).sort((a, b) => b.score - a.score).slice(0, 3).map((user, index) => `${index + 1}位: ${user.name} (${user.score})`);
}

const users: User[] = [
  { id: 1, name: "Alice", score: 100, isActive: true },
  { id: 2, name: "Bob", score: 60, isActive: false },
  { id: 3, name: "Charlie", score: 80, isActive: true },
  { id: 4, name: "David", score: 40, isActive: true },
  { id: 5, name: "Eve", score: 20, isActive: true },
]

console.log(getTopRankers1(users));

export { };