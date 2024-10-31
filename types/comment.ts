interface TweetComment {
    id: string
    message: string
    userId: string
    postId: string
    createdAt: Date
    user: User
    Likes: User[],
    children: TweetComment[],
}