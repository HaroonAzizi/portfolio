import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, slug);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post file not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      readTime: data.readTime,
      category: data.category,
      content,
      ...data,
    };
  } catch (error) {
    console.error('Error reading blog post:', error);
    return null;
  }
}

export function getAllPosts() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn('_posts directory not found');
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          id,
          ...data,
        };
      });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}