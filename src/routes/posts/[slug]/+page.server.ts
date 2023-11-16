export const prerender = true;

export function entries() {
  const paths = import.meta.glob('/src/posts/**/*.md', { eager: true });
  return Object.keys(paths).map(x => ({ slug: x.split('/').at(-1)!.replace('.md', '') }));
}

