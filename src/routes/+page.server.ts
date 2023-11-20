import type { Post } from '$lib/models/post';

const byAlphabetAsc = (a: string, b: string) => a.localeCompare(b);
const byPublishedDateDesc = (a: Post, b: Post) =>
	new Date(b.date).getTime() - new Date(a.date).getTime();

export const prerender = true;

export async function load() {
	const posts: Post[] = [];
	const paths = import.meta.glob('/src/posts/**/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			post.categories = post.categories.map((x) => x.toLocaleLowerCase()).sort(byAlphabetAsc);
			if (post.published) {
				posts.push(post);
			}
		}
	}
	return { posts: posts.sort(byPublishedDateDesc) };
}
