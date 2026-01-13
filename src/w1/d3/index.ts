// 問題1: 基本型と関数の定義
// 以下の要件を満たす関数 calculateTotalPrice を作成してください。
// - 引数1: price（数値）
// - 引数2: quantity（数値）
// - 引数3: discountCode（文字列、省略可能）
// - 戻り値: 数値
// - 処理: price * quantity を計算して返す。

const calculateTotalPrice = (price: number, quantity: number, discountCode?: string): number => {
  return price * quantity;
}

// 問題2: 型エイリアスとUnion型
// 受託開発の現場では、APIのレスポンス状態を管理することが多いです。以下の型定義と関数を作成してください。

// - 型 UserRole: 'admin', 'editor', 'viewer' のいずれかの文字列。
// - 型 User: 以下のプロパティを持つオブジェクト。
//   - id: 数値
//   - name: 文字列
//   - role: UserRole 型
// - 関数 checkPermission: * 引数に User オブジェクトを受け取る。
// role が 'admin' の場合は true、それ以外は false を返す。
type UserRole = 'admin' | 'editor' | 'viewer'
type User = {
  id: number;
  name: string;
  role: UserRole;
}

const checkPermission = (user: User): boolean => {
  return user.role === 'admin' ? true : false;
}

// 問題3: 配列とオブジェクトのネスト
// 以下のデータ構造を定義し、変数 posts を作成してください。
// - 型 Post:
//   - title: 文字列
//   - tags: 文字列の配列
// - 変数 posts: Post 型の配列として定義し、2つ以上の記事データ（ダミー）を代入する。

type Post = {
  title: string;
  tags: string[];
}

const posts: Post[] = [
  {
    title: 'Post 1',
    tags: ['tag1', 'tag2']
  },
  {
    title: 'Post 2',
    tags: ['tag2', 'tag3']
  }
]