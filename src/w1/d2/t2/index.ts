// 1. 型定義：`Participant`: `{ name: string, age: number, isVip: boolean }`
// 2. 関数 `getCleanedParticipantList(data: any[]): string[]` を作成。
//     - 引数が `any[]`（汚いデータ）として入ってくる想定です。
//     - **以下のデータを除外**してください。
//         - `name` が空文字、または `undefined` のもの。
//         - `age` が 18歳未満のもの。
//     - **ソート順**: VIPを最優先にし、同じVIP同士なら年齢が高い順にする。
//     - **出力**: `"NAME (AGE)"` （例: `"TANAKA (25)"`）の形式。名前はすべて **大文字** にしてください。


type Participant = {
  name: string;
  age: number;
  isVip: boolean;
}

const getCleanedParticipantList = (data: any[]): string[] => {
  return data.filter(data => data.name && typeof data.name === "string" && data.age >= 18)
    .sort((a, b) => {
      if (a.isVip !== b.isVip) return a.isVip ? -1 : 1;
      return b.age - a.age;
    }).map(data => `${data.name.toUpperCase()}(${data.age})`)


}

const participants = [
  { name: "SATOU", age: 20, isVip: true },
  { age: 22, isVip: false },
  { name: "Yamada", age: 30, isVip: true },
  { name: "Tanaka", age: 25 },
  { name: "koike", age: 25, isVip: true },
]


console.log(getCleanedParticipantList(participants));


export { }
