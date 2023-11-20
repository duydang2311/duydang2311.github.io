<script lang="ts">
	import Post from './Post.svelte';

	export let data;
</script>

<h1>Latest posts</h1>
<ol class="mt-2 space-y-4 list-decimal">
	{#each data.posts as post}
		<li>
			<Post {post} />
		</li>
	{/each}
</ol>
