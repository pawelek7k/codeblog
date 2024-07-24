import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface PostData {
    slug: string;
    title: string;
    date: string;
    isFeatured: boolean;
    content: string;
}

const postsDirectory = path.join(process.cwd(), 'posts')

const getPostData = (fileName: string): PostData => {
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '') // removes the file extension
    const postData: PostData = {
        slug: postSlug,
        title: data.title,
        date: data.date,
        isFeatured: data.isFeatured,
        content
    }
    return postData
}

export const getAllPosts = (): PostData[] => {
    const postFiles = fs.readdirSync(postsDirectory)

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort((A, B) => {
        return A.date > B.date ? -1 : 1
    })

    return sortedPosts
}

export const getFeaturedPosts = (): PostData[] => {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts
}
