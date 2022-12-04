import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getBlogPosts(): BlogPostMetadata[] {
  const blogPostsBasePath = [process.cwd(), 'pages', 'blog']
  const blogPostFileNames = fs.readdirSync(path.join(...blogPostsBasePath))

  const blogPostMetas = blogPostFileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')
    const fileContents = fs.readFileSync(
      path.join(...blogPostsBasePath, fileName)
    )
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data,
    } as BlogPostMetadata
  })

  return blogPostMetas
}

export type BlogPostMetadata = {
  id: string
  title: string
  date: string
  description: string
}
