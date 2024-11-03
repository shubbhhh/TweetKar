interface User {
    id: string,
    email: string,
    username: string
    name: string,
    details?: string,
    profilePic?: string,
    subscribedTo?: Subscribes[],
    subscribers?: Subscribes[]
    creationDate?: Date,
    password?: string,
}

interface Subscribes {
    id: string
    userId: string
    subscriberId: string
    creationDate: Date
}