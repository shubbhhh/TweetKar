interface Post {
    id: string
    content: string
    publishedDate: Date
    author: User
    authorId: string
    bookmarks: []
    Likes: User[]
    comments: TweetComment[]
}