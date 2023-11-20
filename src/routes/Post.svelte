<script lang="ts">
	import type { Post } from '$lib/models/post';
	import { formatRelative } from 'date-fns';

	export let post: Post;
</script>

<a
	href="/posts/{post.slug}"
	class="text-h4 flex flex-col items-start gap-2 sm:flex-row sm:items-center"
>
	{post.title}
	<span class="text-gray-500 text-sm hidden sm:inline text-p">·</span>
	<span class="text-gray-500 text-sm text-p"
		>{formatRelative(new Date(post.date), new Date())}
	</span>
</a>
