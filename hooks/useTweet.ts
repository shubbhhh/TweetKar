import prisma from "@/db"

interface BlogContent {
    title: string
    content: string
    authorId: string
}


function useBlog() {

    async function createBlog(BlogContent: BlogContent) {
        await prisma.post.create({
            data: {
                title: BlogContent.title,
                content: BlogContent.content,
                authorId: BlogContent.authorId
            },
        });
    }
}