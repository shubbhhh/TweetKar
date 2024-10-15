interface Post {
    id: string
    title: string
    content: string
    publishedDate: Date
    author: User
    authorId: string
    bookmarks: []
    Likes: User[]
    comments: []
}