// Issue：ユーザー権限によるデータフィルタリング

// 【要件】

// 1.src/phase0/w1/d3/index.ts を作成。

// 2.以下の型を定義してください。
// - User: id(number), name(string), role('admin' | 'member' | 'guest')

// 3.関数 getAuthorizedUserNames(users: User[]): string[] を作成。
// - 'admin' または 'member' の権限を持つユーザーだけを抽出する。
// - 抽出したユーザーの 名前（name） だけの配列を返す。

// 4.【制約】: filter と map をつなげて（チェーンして）1つの処理として記述してください。

type User = {
  id: number;
  name: string;
  role: 'admin' | 'member' | 'guest';
}

const getAuthorizedUserNames = (users: User[]): string[] => {
  return users.filter(user => user.role === 'admin' || user.role === 'member').map(user => user.name)
}
// const getAuthorizedUserNames = (users: User[]): string[] => {
//   return users.filter(user => ["admin", "member"].includes(user.role)).map(user => user.name)
// }

export { };