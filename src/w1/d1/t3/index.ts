// 1.Post 型を定義：id, title, tags(string[]), isPublished(boolean)

// 2.関数 getAllTags(posts: Post[]): string[] を実装：
// - 公開済み（isPublished: true）の記事だけを対象にする。
// - 全ての記事の tags を1つの配列にまとめる。
// - 【重要】: 重複するタグは削除して、ユニークな状態にしてください。

// 【ヒント：重複排除】 JavaScriptで重複を消す最も簡単な方法は Set オブジェクトを使うことです。 const uniqueArray = [...new Set(duplicatedArray)];


type Post = {
  id: number;
  title: string;
  tags: string[];
  isPublished: boolean;
}

const posts: Post[] = [
  { id: 1, title: 'Post 1', tags: ['tag1', 'tag2'], isPublished: true },
  { id: 2, title: 'Post 2', tags: ['tag2', 'tag3'], isPublished: false },
  { id: 3, title: 'Post 3', tags: ['tag1', 'tag3'], isPublished: true },
]

const getAllTags = (posts: Post[]): string[] => {
  return [...new Set(posts.filter(post => post.isPublished).flatMap(post => post.tags))]
}

console.log(getAllTags(posts));

export { };