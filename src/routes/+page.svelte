<script lang="ts">
	import Post from './Post.svelte';

	export let data;
</script>

<h1>Posts</h1>
<ul class="mt-2 space-y-4">
	{#each data.posts as post}
		<li>
			<Post {post} />
		</li>
	{/each}
</ul>
