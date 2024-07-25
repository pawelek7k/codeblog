import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface PostData {
    slug: string;
    title: string;
    date: string;
    image: string
    excerpt: string
    isFeatured: boolean;
    content: string;
}

export const getPostsFiles = (): string[] => {
    return fs.readdirSync(postsDirectory);
}

const postsDirectory = path.join(process.cwd(), 'posts')

export const getPostData = (id: string): PostData => {
    const postSlug = id.replace(/\.md$/, '') // removes the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)


    const postData: PostData = {
        slug: postSlug,
        title: data.title as string,
        date: data.date as string,
        image: data.image as string,
        excerpt: data.excerpt as string,
        isFeatured: data.isFeatured as boolean,
        content
    }
    return postData
}

export const getAllPosts = (): PostData[] => {
    const postFiles = getPostsFiles()

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((A, B) => {
        return A.date > B.date ? -1 : 1;
    });

    return sortedPosts;
};

export const getFeaturedPosts = (): PostData[] => {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured)

    return featuredPosts
}
