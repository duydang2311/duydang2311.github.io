<script lang="ts">
	import type { Post } from '$lib/models/post';
	import { formatRelative } from 'date-fns';

	export let post: Post;
</script>

<h4>
	<a href="/posts/{post.slug}" class="flex items-center gap-2">
		{post.title} - <span class="text-sm">{formatRelative(new Date(post.date), new Date())} </span>
	</a>
</h4>
